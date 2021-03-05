import {json, Request, Response} from 'express'
import knex from '../database/connection'
import GetAddressService from '../services/GetAddressService'
import CacheService from '../services/CacheService'

class RelatorioController {

  async create(request: Request, response: Response) {
    const {
      latitude,
      longitude,
      denunciante,
      denuncia
    } = await request.body

    //Setando a chave para uma string com a lat e long passadas
    const coordenadas = `${latitude},${longitude}`

    const cacheService = new CacheService()

    //Busca a informação na cache
    const cachedData = await cacheService.get(coordenadas)

    if (cachedData) {
      const endereco = cachedData
    }
    else  {
    
    //Realizando busca a API do Geocoding e salvando em cache
    const getAddressService = new GetAddressService()
    const endereco = await getAddressService.execute(latitude, longitude)
    cacheService.save(coordenadas, endereco)  
    }
    
    
    
   const enderecoFiltrado = {
     logradouro: endereco[0].streetName,
     bairro: endereco[0].extra.neighborhood,
     cidade: endereco[0].administrativeLevels?.level2long,
     estado: endereco[0].administrativeLevels?.level1long,
     pais: endereco[0].countryCode,
     cep: endereco[0].zipcode
   }
   
   console.log(enderecoFiltrado)
   
    await knex('relatorio').insert(
      {
        latitude,
        longitude,
        denunciante: JSON.stringify(denunciante),
        denuncia: JSON.stringify(denuncia),
        endereco: JSON.stringify(enderecoFiltrado)
      })

    response.json({
      latitude,
      longitude,
      denunciante,
      denuncia,
      enderecoFiltrado
    })
  }

  async show(request: Request, response: Response) {
    const relatorios = await  knex('relatorio').select('*')

    return response.json(relatorios)
  }
}

export default RelatorioController
import { response, Response } from "express";
import NodeGeocoder from 'node-geocoder'


class GetAddressService {

  public async execute(latitude: number, longitude: number) {
    
    //Configurações do NodeGeocoder
    const geocoder = NodeGeocoder({
      provider: 'google',
      apiKey: process.env.APIKEY
    })
    
    const resultApi = await geocoder.reverse({lat: latitude ,lon: longitude})
    
    return resultApi
  }
}


export default GetAddressService;
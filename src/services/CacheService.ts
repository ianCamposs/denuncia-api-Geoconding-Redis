import Redis, {Redis as RedisClient} from 'ioredis'
import { Entry } from 'node-geocoder'

class CacheService {

private client: RedisClient

  //Configurações de conexão do Redis
  constructor() {
    this.client = new Redis({
      host: 'localhost',
      port: 6379
    })
  }

  //Buscando no Redis, passando uma chave e recuperando o seu valor correpondente
  async get(key: string) {
    const value = await this.client.get(key)
    
    return value ? JSON.parse(value) : null
  }

  //Salvando chave-valor no Redis, com configuração de armazenamento por 42 segundos
  async save(key: string, value: Entry[]) {
    return this.client.set(key, JSON.stringify(value) , 'EX', 42)
  }
}

export default CacheService
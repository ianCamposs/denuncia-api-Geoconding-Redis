<h1 align="center">denuncia-api-Geoconding-Redis</h1>

<p align="center">
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como Executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## :book: Projeto back end utilizando GeoCoding API e armazenamento em cache com Redis.


## ✨ Tecnologias

Esse projeto utiliza as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Redis](https://redis.io/)
- [Ioredis](https://www.npmjs.com/package/ioredis)
- [Node-Geocoder](https://www.npmjs.com/package/node-geocoder)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [Docker](https://www.docker.com/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)
- [Insomnia](https://insomnia.rest/)

## 💻 Projeto

<p align="center"> O projeto tem o intuito de regristrar uma denúncia feita por um usuário, a requisição feita por ele é composta por suas coordenadas(latitude, longitude), seus dados, como Nome e CPF e a denúncia que ele deseja registrar, informando título e descrição da mesma. A API desenvolvida recebe essa requisição, utiliza os dados latitude e longitude para fazer uma requisição a API Geocoding, através da biblioteca node-geocoder. A resposta dessa consulta a API externa é um endereço rico de informações, como rua, bairro, estado, correspondente ao latitude e longitude enviadas. Com o objetivo de otimizar o processo de consulta a essa API externa, implementamos uma memória cache utilizando o Radis, instalamos em um container Docker. Dessa forma, como pode ser visto no fluxo abaixo, a nossa API recebe a requisição de denúncia, verifica se o endereço correspondente as coordenadas passadas já está armazenado em cache, se sim, o Redis retorna o valor salvo para que a API salve no banco de dados todas as informações, proporcionando grande economia de tempo, caso não haja essa informação em cache, consultamos a API externa, trazemos o endereço correspondente as coordenadas, salvamos as coordenadas como chave e o endereço como valor no Redis, após isso passamos a informação para o Banco de dados salvar as informações.  
	
![alt text](https://github.com/ianCamposs/denuncia-api-Geoconding-Redis/blob/main/img/Capturar2.PNG)

## 🚀 Como Executar

<h1>Configurações iniciais</h1>

- Clone esse repositório

- Crie uma API Key na Google Cloud (https://cloud.google.com/docs/authentication/api-keys)

- Use o 'yarn' para instalar todas as dependências

- Crie um arquivo .env e insira a sua Api-Key dentro do arquivo no padrão chave valor, dessa forma: APIKEY = suaApi-key

<h1>Inicializando tecnologias auxiliares</h1>

- Use o script "knex:migrate" para rodar as migrations do projeto, assim, criando o banco de dados Sqlite de acordo com as configurações do projeto, use `npm run knex:migrate`

- Use o docker para armazenar sua cache Redis, criando com o seguinte script: `docker run --name redis -p 6379:6379 -d redis`


<h1>Rodando a aplicação</h1>

- Use o script "dev", com `yarn dev` para rodar a aplicação.

- Entre no insomnia, crie uma rota POST, com os seguintes parâmetros http://localhost:3000/denuncias, dentro do request.body, insira o seguinte exemplo json:{
	"latitude": -1.4344138,
  "longitude": -48.4772386,
  "denunciante": {
    "nome": "José de Oliveira",
    "cpf": "95761638037"
  },
  "denuncia": {
    "titulo": "Esgoto a céu aberto",
    "descricao": "Existe um esgoto a céu aberto nesta localidade."
  }
}

- Verifique o tempo de execução da primeira requisição
![alt text](https://github.com/ianCamposs/denuncia-api-Geoconding-Redis/blob/main/img/Capturar.PNG)

- Execute a requisição novamente e veja o impacto do uso da cache no tempo final.
![alt text](https://github.com/ianCamposs/denuncia-api-Geoconding-Redis/blob/main/img/Capturar1.PNG)

- Acesse o seu beekeeper, conecte ao sqlite server e visualize a requisição salva na tabela Relatórios.

:tada: I hope you enjoy my journey :tada:

<h1 align="center">denuncia-api-Geoconding-Redis</h1>

<p align="center">
  <a href="#-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-How-execute">How Execute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-License">License</a>
</p>

<br>

## :book: Projeto back End utilizando GeoCoding API e armazenamento em cache com Redis.


## ✨ Technologies

This project is using this technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Redis](https://redis.io/)
- [Ioredis](https://www.npmjs.com/package/ioredis)
- [Node-Geocoder](https://www.npmjs.com/package/node-geocoder)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [Docker](https://www.docker.com/)
- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)
- [Insomnia](https://insomnia.rest/)

## 💻 Project

<p align="center"> Projeto back end utilizando GeoCoding API para consulta de endereço a partir de coordenadas informadas, além disso,
o projeto utiliza Redis para a criação de uma cache para retornar as consultas mais recentes.

## 🚀 How execute

<h1>Configurações iniciais</h1>

- Clone esse repositório

- Crie uma API Key na Google Cloud (https://cloud.google.com/docs/authentication/api-keys)

- Use o 'yarn' para instalar todas as dependências

- Crie um arquivo .env e insira a sua Api-Key dentro do arquivo no padrão chave valor, dessa forma: APIKEY = suaApi-key

<h1>Inicializando tecnologias auxliares</h1>

- Use o script "knex:migrate" para rodar as migrations do projeto, assim, criando o banco de dados Sqlite de acordo com as configurações do projeto, use npm run knex:migrate

- Use o docker para armazenar sua cache Redis, criando com o seguinte script: docker run --name redis -p 6379:6379 -d redis


<h1>Rodando a aplicação</h1>

- Use o script "dev", com yarn dev para rodar a aplicação.

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




## 📄 License

This project is using license MIT. See this file [LICENSE](LICENSE.md) for more details.

:tada: I hope you enjoy my journey :tada:

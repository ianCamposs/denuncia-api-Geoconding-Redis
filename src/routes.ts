import express from 'express'
import RelatorioController from './controllers/relatorioController'

const routes = express.Router()

const relatorioController = new RelatorioController()

routes.post('/denuncias', relatorioController.create)
routes.get('/', relatorioController.show)

export default routes
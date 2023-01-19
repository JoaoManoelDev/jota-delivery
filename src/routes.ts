import { FastifyInstance } from "fastify"

import { CreateClientController } from "./modules/clients/use-cases/create-client/create-client-controller"

const createClientController = new CreateClientController()

export async function appRoutes(app: FastifyInstance) {
  app.post('/clients', createClientController.handle)
}
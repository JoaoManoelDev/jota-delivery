import { FastifyInstance } from "fastify"
import { AuthenticateClientController } from "./modules/account/authenticate-client/authenticate-client-controller"

import { CreateClientController } from "./modules/clients/use-cases/create-client/create-client-controller"

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

export async function appRoutes(app: FastifyInstance) {
  app.post('/clients', createClientController.handle)

  app.post('/client/authenticate', authenticateClientController.handle)
}
import { FastifyInstance } from "fastify"

import { AuthenticateClientController } from "./modules/account/authenticate-client/authenticate-client-controller"
import { CreateClientController } from "./modules/clients/use-cases/create-client/create-client-controller"
import { CreateDeliverymanController } from "./modules/deliveryman/use-cases/create-deliveryman/create-deliveryman-controller"

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()

export async function appRoutes(app: FastifyInstance) {
  app.post('/clients', createClientController.handle)

  app.post('/client/authenticate', authenticateClientController.handle)

  app.post('/deliveryman', createDeliverymanController.handle)

}
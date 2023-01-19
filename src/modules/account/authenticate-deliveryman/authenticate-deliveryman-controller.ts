import { FastifyReply, FastifyRequest } from "fastify"
import { authDeliverymanBodyVaidation } from "../validations/auth-client-body-validation"
import { AuthenticateDeliverymanUseCase } from "./authenticate-deliveryman-use-case"

export class AuthenticateDeliverymanController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    
    const { password, username } = authDeliverymanBodyVaidation.parse(request.body)

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase()

    const token = await authenticateDeliverymanUseCase.execute({ password, username })

    return reply.code(200).send(token)

  }
}
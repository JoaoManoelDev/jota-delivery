import { FastifyReply, FastifyRequest } from "fastify"
import { createDeliverymanBodyVaidation } from "../../validations/create-deliveryman-body-validation"
import { CreateDeliverymanUseCase } from "./create-deliveryman-use-case"

export class CreateDeliverymanController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    
    const { password, username } = createDeliverymanBodyVaidation.parse(request.body)

    const createDeliverymanUseCase = new CreateDeliverymanUseCase()

    const deliveryman = await createDeliverymanUseCase.execute({ password, username })

    return reply.code(201).send(deliveryman)

  }
}
import { FastifyReply, FastifyRequest,  } from 'fastify'
import { createClientBodyVaidation } from '../../validations/create-client-body-validation'
import { CreateClientUseCase } from './create-client-use-case'

export class CreateClientController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    
    const { username, password } =  createClientBodyVaidation.parse(request.body)

    const createClientUseCase = new CreateClientUseCase()

    await createClientUseCase.execute({ username, password })

    return reply.code(201).send({ message: 'Client created succesfully.' })
  }
}
import { FastifyReply, FastifyRequest } from "fastify"
import { authClientBodyVaidation } from "../validations/auth-client-body-validation"
import { AuthenticateClientUseCase } from "./authenticate-client-use-case"

export class AuthenticateClientController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { password, username } = authClientBodyVaidation.parse(request.body)

    const authenticateClientUseCase = new AuthenticateClientUseCase()

    const token = await authenticateClientUseCase.execute({ password, username })

    return reply.code(200).send(token)

  }
}
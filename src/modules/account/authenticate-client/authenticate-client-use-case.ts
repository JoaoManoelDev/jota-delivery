import { prisma } from "../../../lib/prisma"
import { sign } from 'jsonwebtoken'
import { compare } from "bcryptjs"
import { env } from 'process'

interface IAuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    
    const client = await prisma.clients.findUnique({
      where: {
        username
      }
    })

    if (!client) {
      throw new Error('Username or password incorrect.')
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new Error('Username or password incorrect.')
    }

    const token = sign({username}, '4252e1e7c810abafc59e35c675dbd086', {
      subject: client.id,
      expiresIn: '1d'
    })

    return {
      token
    }

  }
}
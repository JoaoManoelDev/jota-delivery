import { prisma } from "../../../../lib/prisma"
import { hash } from 'bcryptjs'

interface ICreateClient {
  password: string
  username: string
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    
    const clientExist = await prisma.clients.findUnique({
      where: {
        username
      }
    })

    if (clientExist) {
      throw new Error('Client already exists.')
    }

    const salt = 8
    const passwordHash = await hash(password, salt)

    await prisma.clients.create({
      data: {
        username,
        password: passwordHash
      }
    })

  }
}
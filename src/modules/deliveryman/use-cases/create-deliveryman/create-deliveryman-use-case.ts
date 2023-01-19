import { prisma } from '../../../../lib/prisma'
import { ApiError } from '../../../../errors/api-errors'
import { hash } from 'bcryptjs'

interface ICreateDeliveryman {
  username: string
  password: string
}

export class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    
    const deliverymanExists = await prisma.deliverymans.findUnique({
      where: {
        username
      }
    })

    if (deliverymanExists) {
      return new ApiError(409, 'Deliveyman already exists.')
    }

    const salt = 8
    const passwordHash = await hash(password, salt)

    await prisma.deliverymans.create({
      data: {
        username,
        password: passwordHash
      }
    })

  } 
}
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { ApiError } from "../../../errors/api-errors"
import { prisma } from "../../../lib/prisma"

interface IAuthenticateDeliveryman {
  username: string
  password: string
}

export class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: IAuthenticateDeliveryman) {

    const deliveryman = await prisma.deliverymans.findUnique({
      where: {
        username
      }
    })

    if (!deliveryman) {
      return new ApiError(400, 'Username or password incorrect.')
    }

    const passwordMatch = await compare(password, deliveryman.password)

    if (!passwordMatch) {
      return new ApiError(400, 'Username or password incorrect.')
    }

    const token = sign({username}, '76503a2824f6eb7a94c581624bcba4e8', {
      subject: deliveryman.id,
      expiresIn: '1d',
    })

    return {
      token
    }

  }
}
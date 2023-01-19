import { z } from 'zod'

export const createDeliverymanBodyVaidation = z.object({
  username: z.string(),
  password: z.string()
})
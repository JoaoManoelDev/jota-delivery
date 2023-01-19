import { z } from 'zod'

export const authDeliverymanBodyVaidation = z.object({
  username: z.string(),
  password: z.string()
})
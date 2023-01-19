import { z } from 'zod'

export const createClientBodyVaidation = z.object({
  username: z.string(),
  password: z.string()
})
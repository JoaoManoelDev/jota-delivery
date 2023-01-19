import { z } from 'zod'

export const authClientBodyVaidation = z.object({
  username: z.string(),
  password: z.string()
})
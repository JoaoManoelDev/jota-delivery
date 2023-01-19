import Fastify from 'fastify'
import { appRoutes } from './routes'

const app = Fastify()

app.register(appRoutes)


app.listen({
  port: 3333,
}).then(() => {
  console.log('Server running in port 3333')
})
import Fastify from 'fastify'

const app = Fastify()

app.listen({
  port: 3333,
}).then(() => {
  console.log('Server running in port 3333')
})
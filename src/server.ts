import { fastify } from 'fastify'

const app = fastify()
const port = 3333

app.get('/', () => {
  return "Hello World"
})

app.listen({
  port
}).then(() => {
  console.log(`Server is running on port ${port}.`)

})
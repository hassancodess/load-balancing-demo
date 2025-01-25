import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import os from 'os'

const app = new Hono()

app.get('/', (c) => {
  return c.text(`Hello from ${os.hostname()}!`)
})

const port = 8080
console.log(`Listening on port ${port} on  ${os.hostname()}`)

serve({
  fetch: app.fetch,
  port,
})

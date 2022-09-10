// ESM
const fastify = require('fastify')({logger:true})
const route = require('./routes')

fastify.register(route)

// Run the server!
fastify.listen({ port: 3010 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})

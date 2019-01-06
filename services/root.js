'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { 
      application: "Api Tudo Em Grãos",
      version: 1.0,
      description: ""
    }
  })
};
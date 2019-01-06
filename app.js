'use strict'

require("dotenv-safe").load();

const path = require('path');
const AutoLoad = require('fastify-autoload');

module.exports = function (fastify, opts, next) {
  fastify.register(require('fastify-swagger'), {
    swagger: {
      info: {
        title: 'Documentação',
        description: 'Teste requisições para nossa api por meio desta documentação que utiliza o framework swagger.',
        version: '1.0.0'
      }
      ,externalDocs: {
        url: 'http://www.website.com.br/api/integracao',
        description: 'Encontre maiores detalhes sobre integração com nossa Api neste link.'
      }
      ,host: 'localhost:3000'
      ,schemes: ['http']
      ,consumes: ['application/json']
      ,produces: ['application/json']
      ,securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          description: "",
          name: 'Authorization',
          in: 'header'
        }
      }
    }
    ,exposeRoute: true
    ,routePrefix: '/documentation'
  });
  
  fastify.register(require('fastify-formbody'));

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  });

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts)
  });

  // Make sure to call next when done
  next()
}
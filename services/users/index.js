'use strict'

module.exports = async (fastify, opts) => {
  const doc = require('./especification');
  const bcrypt = require('bcrypt');
  const { user } = require("../../models");

  fastify.get('/users', {
    schema: doc.list,
    beforeHandler: [fastify.authenticate]
  }, async (request, reply) => {
    const users = await user.findAll();

    reply
      .code(200)
      .send({
        success: true,
        users: users
      });
  });

  fastify.get('/users/:id', {
    schema: doc.find,
    beforeHandler: [fastify.authenticate]
  }, async (request, reply) => {
    const user = await user.findById(request.params.id)

    reply
      .code(200)
      .send({
        success: true,
        user: user
      });
  });

  fastify.post('/users/create', {
    schema: doc.create
  }, async (request, reply) => {
    const password = await bcrypt.hash(request.body.password, 10)

    const result = await user
      .create({
        username: request.body.username,
        email: request.body.email,
        password: password,
        available: true
      })

    reply
      .code(201)
      .send({
        result: result,
        success: true,
        message: "Usuário inserido com sucesso!"
      });
  });

  fastify.put('/users/update', {
    schema: doc.update,
    beforeHandler: [fastify.authenticate]
  }, async (request, reply) => {
    const result = await models.User
      .create({
        username: request.body.username,
        email: request.body.email,
        available: request.body.available
      });

    reply
      .code(200)
      .send({
        success: true,
        message: "Usuário atualizado com sucesso!"
      });
  });

  fastify.delete('/users/:id', {
    schema: doc.delete,
    beforeHandler: [fastify.authenticate]
  }, async (request, reply) => {
    const result = await models.User
      .destroy({
        where: {
          id: request.params.id
        }
      });

    reply
      .code(201)
      .send({
        success: true,
        message: "Usuário removido com sucesso!"
      });
  });
}
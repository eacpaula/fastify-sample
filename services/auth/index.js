'use strict'

module.exports = async (fastify, opts) => {	
  const doc = require('./especification');
  const bcrypt = require('bcrypt');
  const { user } = require("../../models");

  fastify.post('/auth/login', {
    schema: doc.auth,
  },async (request, reply) => {
    const data = {
      email: request.body.email,
      password: request.body.password
    }

    const _user = await user.findAll({
      where: {
        email: data.email
      },
      plain: true,
      raw: true
    });

    if(_user) {
      const match = await bcrypt.compare(data.password, _user.password);
 
      if(match) {
        const payload = {
          id: _user.id,
          username: _user.username,
          email: _user.email
        };
        
        const token = fastify.jwt.sign({ payload })

        reply
          .code(200)
          .send({
            success: true,
            token: token,
            message: "Login efetuado com sucesso!"
          });
      } else {
        reply
          .code(200)
          .send({
            success: false,
            token: null,
            message: "Usuário ou senha incorreto!"
          });
      }
    } else {
      reply
        .code(200)
        .send({
          success: false,
          token: null,
          message: "Usuário ou senha incorreto!"
        });
    }
  });
}
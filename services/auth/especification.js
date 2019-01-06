module.exports = {
    auth: {
        description: 'Este método permite com que o usuário se autentique na api, utilize o token para poder realizar outras requisições na api.',
        tags: ['authentication'],
        summary: 'qwerty',
        params: {
            type: 'object',
            properties: {
                email: {
                    type: 'string',
                    description: 'E-mail do usuário'
                },
                password: {
                    type: 'string',
                    description: 'Senha do usuário'
                }
            }
        },
        response: {
            200: {
                description: 'Succesful response',
                type: 'object',
                properties: {
                    success: { type: 'boolean' },
                    token: { type: 'string' },
                    message: { type: 'string' }
                }
            }
        }
    }
}
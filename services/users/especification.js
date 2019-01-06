module.exports = {
    list: {
        description: 'Este método devolve todos os usuários da base de dados.',
        tags: ['user'],
        body: {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        username: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        available: { type: 'boolean' }
                    }
                }
            }
        },
        response: {
            200: {
                description: 'Succesful response',
                type: "array",
                items: {
                    type: 'object',
                    properties: {
                        username: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        available: { type: 'boolean' }
                    }
                }
            }
        }
    },
    find: {
        description: 'Este método permite encontrar um usuário',
        tags: ['user'],
        summary: 'qwerty',
        body: {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        username: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        available: { type: 'boolean' }
                    }
                }
            }
        },
        response: {
            200: {
                description: 'Succesful response',
                type: 'object',
                properties: {
                    username: { type: 'string' },
                    email: { type: 'string' },
                    password: { type: 'string' },
                    available: { type: 'boolean' }
                }
            }
        }
    },
    create: {
        description: 'Este método permite criar um usuário novo em nossa base de dados',
        tags: ['user'],
        summary: 'qwerty',
        body: {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        username: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        available: { type: 'boolean' }
                    }
                }
            }
        },
        response: {
            201: {
                description: 'Succesful response',
                type: 'object',
                properties: {
                    success: { type: 'boolean' },
                    message: { type: 'string' }
                }
            }
        }
    },
    update: {
        description: 'Este método permite atualizar as informações de um usuário',
        tags: ['user'],
        summary: 'qwerty',
        body: {
            type: 'object',
            properties: {
                hello: { type: 'string' },
                obj: {
                    type: 'object',
                    properties: {
                        username: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        available: { type: 'boolean' }
                    }
                }
            }
        },
        response: {
            201: {
                description: 'Succesful response',
                type: 'object',
                properties: {
                    success: { type: 'boolean' },
                    message: { type: 'string' }
                }
            }
        }
    },
    delete: {
        description: 'Este método permite remover um usuário pelo seu id',
        tags: ['user'],
        summary: 'qwerty',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    description: 'user id'
                }
            }
        },
        response: {
            200: {
                description: 'Succesful response',
                type: 'object',
                properties: {
                    success: { type: 'boolean' },
                    message: { type: 'string' }
                }
            }
        }
    }
}
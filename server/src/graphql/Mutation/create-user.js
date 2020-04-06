const uuid = require('uuid')
const knex = require('../../db/knex')

const createUser = async (_, args) => {
    const id = uuid()
    const user = { id, ...args }
    await knex('user').insert(user)
    return user
}

module.exports = createUser
const { MutationDefs } = require('../mutation/mutations');
const { QueryDefs } = require('../queries/queries');

const Todo = require('./todo');
const User = require('./user');

const typeDefs = `
    ${MutationDefs}
    ${QueryDefs}
    ${Todo.typeDef}
    ${User.typeDef}
`

module.exports = { typeDefs };
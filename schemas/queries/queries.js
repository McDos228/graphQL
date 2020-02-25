const todoList = require('./todo/todo-list');
const todoById = require('./todo/todo-by-id');

const QueryDefs = `type Query {
    ${todoList.query}
    ${todoById.query}
}`;

const QueryResolvers = {
    ...todoList.resolver,
    ...todoById.resolver
};

module.exports = { QueryDefs, QueryResolvers };
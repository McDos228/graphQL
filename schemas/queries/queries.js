const todoList = require('./todo/todo-list');
const todoById = require('./todo/todo-by-id');

const QueryDefs = `type Query {
    ${todoById.query}
    ${todoList.query}
}`;

const QueryResolvers = {
    ...todoById.resolver,
    ...todoList.resolver
};

module.exports = { QueryDefs, QueryResolvers };
const todoList = require('./todo/todo-list');

const QueryDefs = `type Query {
    ${todoList.query}
}`;

const QueryResolvers = {
    ...todoList.resolver
};

module.exports = { QueryDefs, QueryResolvers };
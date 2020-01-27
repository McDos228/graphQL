const TypeTodo = require("../../types/todo");
const Todo = require('../../../models/Todo');

const documentation = '"""Return list of all todos"""';

const queryName = "todoList";
const query = `${documentation} ${queryName}(id: ID): ${TypeTodo.type}`;

const resolverFunction = async (root, args, ctx) => {
  try {
    return await Todo.findById(args.id);
  } catch (error) {
    throw new Error(error.message);
  }
};

const resolver = { [queryName]: resolverFunction };

module.exports = { resolver, query };
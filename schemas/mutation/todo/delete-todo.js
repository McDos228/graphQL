const TypeTodo = require("../../types/todo");
const Todo = require('../../../models/Todo');

const documentation = '"""deleyr todo item by given id"""';

const mutationName = "deleteTodo";

const mutation = `${documentation} ${mutationName} (
    id: ID
): ${TypeTodo.type}`;

const resolverFunction = async (parentValue, args, ctx, info) => {
  try {
    const dbItem = await Todo.findById(args.id);
    return await dbItem.remove()
  } catch (error) {
    throw new Error(error.message);
  }
};

const resolver = { [mutationName]: resolverFunction };

module.exports = { resolver, mutation };
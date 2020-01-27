const TypeTodo = require("../../types/todo");
const Todo = require('../../../models/Todo');

const documentation = '"""edit todo item by given id"""';

const mutationName = "editTodo";

const mutation = `${documentation} ${mutationName} (
    id: ID
    title: String
    status: String
): ${TypeTodo.type}`;

const resolverFunction = async (parentValue, args, ctx, info) => {
  try {
    const dbItem = await Todo.findById(args.id);
    dbItem.set(args);
    return await dbItem.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const resolver = { [mutationName]: resolverFunction };

module.exports = { resolver, mutation };
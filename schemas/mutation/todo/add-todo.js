const TypeTodo = require("../../types/todo");
// const Todo = require('../../../models/Todo');
const { Todo } = require('../../../models');

const documentation = '"""Adds a single todo item to the database"""';

const mutationName = "addTodo";

const mutation = `${documentation} ${mutationName} (
    title: String
    status: String
): ${TypeTodo.type}`;

const resolverFunction = async (parentValue, args, ctx, info) => {
  try {
    const dbItem = await Todo.findOne({title: args.title});
    if(dbItem) throw new Error('item with this name already exsist'); 
    return await Todo.create(args);
  } catch (error) {
    throw new Error(error.message);
  }
};

const resolver = { [mutationName]: resolverFunction };

module.exports = { resolver, mutation };
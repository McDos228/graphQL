const TypeTodo = require("../../types/todo");
const Todo = require('../../../models/Todo');
const { isAuth } = require('../../../services/auth/');
const { combineResolvers } = require('../../../services/resolversChain');

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

const resolver = { [queryName]: combineResolvers(isAuth, resolverFunction) };

module.exports = { resolver, query };
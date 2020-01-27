const AddTodoItem = require('./todo/add-todo');
const EditTodoItem = require('./todo/edit-todo');
const DelteTodoItem = require('./todo/delete-todo');
const Login = require('./auth/login');
const Register = require('./auth/register');

const MutationDefs = `type Mutation {
    ${Login.mutation}
    ${Register.mutation}
    
    ${AddTodoItem.mutation}
    ${EditTodoItem.mutation}
    ${DelteTodoItem.mutation}
}`;

const MutationResolvers = {
    ...Login.resolver,
    ...Register.resolver,

    ...AddTodoItem.resolver,
    ...EditTodoItem.resolver,
    ...DelteTodoItem.resolver,
};

module.exports = { MutationResolvers, MutationDefs };
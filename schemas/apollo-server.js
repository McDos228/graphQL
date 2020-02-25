const { ApolloServer } = require('apollo-server-express');
const { QueryResolvers } = require("./queries/queries");
const { MutationResolvers } = require('./mutation/mutations');
const { makeExecutableSchema } = require("graphql-tools");
const { typeDefs } = require("./types/types");
const { context } = require('../services/context');
const { PLAYGROUND_URL } = require('../config');
const { formatError } = require('../errors');

const resolvers = {
    Query: QueryResolvers,
    Mutation: MutationResolvers,
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
    schema,
    context,
    typeDefs,
    formatError,
    uploads: false,    
    playground: {
        endpoint: PLAYGROUND_URL
    },
});


module.exports = { apolloServer, resolvers }
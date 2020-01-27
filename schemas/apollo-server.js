const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const { QueryResolvers } = require("./queries/queries");
const { MutationResolvers } = require('./mutation/mutations');
const { typeDefs } = require("./types/types");
const { makeExecutableSchema } = require("graphql-tools");
const { isAuth } = require('../services/auth');

const resolvers = {
    Query: QueryResolvers,
    Mutation: MutationResolvers,
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
    schema,
    typeDefs,
    uploads: false,
    playground: {
        endpoint: `http://localhost:4000/graphql`
    },
    context: ({ req }) => {
        const token = req.headers.token || null;
        if(token) isAuth(req);
        else throw new Error('token must be provided');
    }
})

module.exports = { apolloServer, resolvers }
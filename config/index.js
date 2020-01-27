const APP_PORT = 4000;

const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || "27017";
const MONGO_DB = process.env.MONGO_DB || "graphQLTestDb";

const MONGO_URL = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
const SECRET = 'test-graphql-app';

module.exports = {
    SECRET,
    APP_PORT,
    MONGO_URL
}
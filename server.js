const express = require('express');
const mongoose = require('mongoose');
const { apolloServer } = require('./schemas/apollo-server');
const http = require('http');
const models = require('./models');

const {
  APP_PORT,
  MONGO_URL
} = require('./config');

const app = express();

const httpServer = http.createServer(app);

mongoose.connect(MONGO_URL);

// for(let model in models){
//   mongoose.Collection(model).watch()
//   // mongoose.Collection(model).watch();
// }


apolloServer.applyMiddleware({ app });

httpServer.listen(APP_PORT, () =>
  console.log(`Backend server listening on port ${APP_PORT}`)
);
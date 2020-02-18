const express = require('express');
const mongoose = require('mongoose');
const { apolloServer } = require('./schemas/apollo-server');
const http = require('http');
const authRoutes = require('./routes/');
const bodyParser = require('body-parser');
const { errHandler } = require('./errors');

const {
  APP_PORT,
  MONGO_URL
} = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errHandler);

const httpServer = http.createServer(app);

mongoose.connect(MONGO_URL);
apolloServer.applyMiddleware({ app });

httpServer.listen(APP_PORT, () =>
  console.log(`Backend server listening on port ${APP_PORT}`)
);
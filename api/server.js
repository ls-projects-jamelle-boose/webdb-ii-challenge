require('pretty-error').start();
const express = require('express'),
  morgan = require('morgan'),
  helmet = require('helmet'),
  carRouter = require('./routes'),
  server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api', carRouter);

server.get('/', (req, res) => {
  let root = {
    message: `Working on root.`,
    status: 200,
  };

  res.status(200).json(root);
});

module.exports = server;

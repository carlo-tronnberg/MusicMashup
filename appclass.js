const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const Dummy = require('./src/dummy');

const app = express();
app.use(helmet());
app.use(cors());

app.get('/api/v1/dummy', (response) => {
  const dummy = new Dummy();
  response.send(dummy.getStatus());
});

// eslint-disable-next-line no-unused-vars
const server = app.listen('9080');

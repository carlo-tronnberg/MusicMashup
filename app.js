const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dummy = require('./src/dummy');

const app = express();
app.use(helmet());
app.use(cors());

app.get('/api/v1/dummy', (response) => {
  response.send(dummy(1, 2));
});

// eslint-disable-next-line no-unused-vars
const server = app.listen('9080');

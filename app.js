const app = require('./src/api/app');

const port = '9080';

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `🚀 NodeJS app listening at http://localhost:${server.address().port}.....`,
  );
});

module.exports = app;

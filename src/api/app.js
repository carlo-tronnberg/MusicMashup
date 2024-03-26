const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(helmet());
app.use(cors());

const { getMusicInfo } = require('./apiMashup');

const HTTP_OK = 200;
const NOT_FOUND = 404;
const BAD_REQUEST = 400;

function mbidIsValid(mbid) {
  return /^([a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})$/.test(
    mbid,
  );
}

app.use(express.static('public'));

app.get('/api/v1/health', (_, response) => response.sendStatus(HTTP_OK));

app.get('/api/v1/getmusicinfo', async (req, res) => {
  if (req.query && req.query.mbid) {
    const { mbid } = req.query;
    // Only allow properly formatted MusicBrainz ID
    if (mbidIsValid(req.query.mbid)) {
      await getMusicInfo(mbid)
        .then((musicInfo) => {
          res.status(HTTP_OK).json(musicInfo);
        })
        .catch((err) => {
          res.status(NOT_FOUND).json(err.message);
        });
    } else {
      res
        .status(BAD_REQUEST)
        .json(`${mbid} is not a correctly formatted MusicBrainz ID.`);
    }
  } else {
    res
      .status(BAD_REQUEST)
      .json(
        "Couldn't validate the MusicBrainz ID. Missing mbid parameter in URL ?mbid=...",
      );
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;

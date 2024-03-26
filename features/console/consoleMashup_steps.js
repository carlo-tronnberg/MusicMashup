const {
  Given,
  When,
  Then,
  And,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const {
  MusicInfoController,
} = require('../../src/controller/musicInfoController');

const SECONDS = 1000;
jest.setTimeout(60 * SECONDS);

let response;
let mbid;
let consoleApp;

// Scenario: Feature:  Console interaction
Given('a new console call', () => {
  consoleApp = new MusicInfoController();
});

And(/^a MusicBrainz ID (.*)$/, (mbid_) => {
  mbid = mbid_;
});

When('querying the mashup application', async () => {
  response = await consoleApp.getMashupMusicInfo(mbid).catch((err) => {
    // No cover image was found
    return err.message;
  });
});

Then(/^it should return the message (.*)$/, (result) => {
  expect(response).toBe(result);
});

Then(/^the returned message should contain (.*)$/, (result) => {
  const re = new RegExp(result, 'i');
  expect(JSON.stringify(response)).toMatch(re);
});

Fusion('consoleMashup.feature');

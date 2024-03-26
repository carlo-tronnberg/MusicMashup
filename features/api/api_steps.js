const {
  Given,
  When,
  Then,
  And,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');
const request = require('supertest');

const api = require('../../src/api/app');

const HTTP_OK = 200;

const ENDPOINTS = {
  health: '/api/v1/health',
  getmusicinfo: '/api/v1/getmusicinfo',
};

const SECONDS = 1000;
jest.setTimeout(60 * SECONDS);

let response;
let mbid;

// Scenario: API Health endpoint
Given('an API consumer', () => {});

When('calling the health endpoint', async () => {
  response = await request(api).get(ENDPOINTS.health).send();
});

Then('it should be successful', () => {
  expect(response.status).toBe(HTTP_OK);
});

// Scenario: The API validates a valid/invalid MusicBrainz ID
Given('an API consumer', () => {});

And(/^an invalid formatted MusicBrainz ID (.*)$/, (mbid_) => {
  mbid = mbid_;
});

And(/^a valid formatted MusicBrainz ID (.*)$/, (mbid_) => {
  mbid = mbid_;
});

When('calling the getmusicinfo endpoint without MusicBrainz ID', async () => {
  response = await request(api).get(`${ENDPOINTS.getmusicinfo}`).send();
});

When('calling the getmusicinfo endpoint', async () => {
  response = await request(api)
    .get(`${ENDPOINTS.getmusicinfo}?mbid=${mbid}`)
    .send();
});

Then(/^it should return a (\d+) (.*) code$/, (http_code) => {
  expect(response.status).toBe(parseInt(http_code, 10));
});

Then(/^message (.*) is returned$/, (result) => {
  expect(response.text).toBe(result);
});

Then(/^the response starts with (.*)$/, (result) => {
  expect(response.text.substr(0, 46)).toBe(result);
});

Fusion('api.feature');

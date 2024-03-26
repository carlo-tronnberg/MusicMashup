const {
  Given,
  When,
  Then,
  Fusion,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('jest-cucumber-fusion');

const api = require('../../src/controller/apiCoverArtArchive');

const SECONDS = 1000;
jest.setTimeout(60 * SECONDS);

let response;
let coverId;

// Scenario: CoverArtArchive API query
Given(/^the cover ID (.*)$/, (coverId_) => {
  coverId = coverId_;
});

When('querying the CoverArtArchive API', async () => {
  response = await api.getImage(coverId).catch((err) => {
    // No cover image was found
    return err.message;
  });
});

Then(/^it should return value (.*)$/, (result) => {
  expect(response).toBe(result);
});

Fusion('apiCoverArtArchive.feature');

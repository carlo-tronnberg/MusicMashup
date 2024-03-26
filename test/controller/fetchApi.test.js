const app = require('../../src/controller/fetchApi');

describe('Test fetch API with an invalid search parameter', () => {
  it('should return 400 Bad Request', async () => {
    const url =
      'https://musicbrainz.org/ws/2/artist/12345678?fmt=json&inc=url-rels%2Brelease-groups';
    // eslint-disable-next-line jest/valid-expect
    expect(async () => {
      await app.fetchApi(url);
    }).rejects.toThrow('Bad Request');
  });
});

describe('Test fetch API with an unexisting search parameter', () => {
  it('should return 404 Not Found', async () => {
    const url =
      'https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7db?fmt=json&inc=url-rels%2Brelease-groups';
    // eslint-disable-next-line jest/valid-expect
    expect(async () => {
      await app.fetchApi(url);
    }).rejects.toThrow('Not Found');
  });
});

describe('Test fetch API with an existing search parameter', () => {
  it('should return something', async () => {
    const url =
      'https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json';
    const response = await app.fetchApi(url);
    expect(response.name).toBe('Nirvana');
  });
});

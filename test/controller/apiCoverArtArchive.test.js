const app = require('../../src/controller/apiCoverArtArchive');

describe('Test CoverArtArchive API with valid cover ID', () => {
  it('should return image URL', async () => {
    const coverId = '1b022e01-4da6-387b-8658-8678046e4cef';
    const response = await app.getImage(coverId);
    expect(response).toContain('http');
  });
});

describe('Test CoverArtArchive API with valid but not found cover ID', () => {
  it('should return Not Found exception', async () => {
    const coverId = '5ee1d355-3b9c-4c73-8461-121e93e9b114';
    const notFoundError = new Error('NOT FOUND');
    notFoundError.status = 404;
    // eslint-disable-next-line jest/valid-expect
    expect(async () => {
      await app.getImage(coverId);
    }).rejects.toThrow(notFoundError);
  });
});

describe('Test CoverArtArchive API with invalid cover ID', () => {
  it('should return Bad Request exception', async () => {
    const coverId = '5ee1d355-3b9c-4c73-8461-121e93e9b114e';
    const badRequestError = new Error('BAD REQUEST');
    badRequestError.status = 400;
    // eslint-disable-next-line jest/valid-expect
    expect(async () => {
      await app.getImage(coverId);
    }).rejects.toThrow(badRequestError);
  });
});

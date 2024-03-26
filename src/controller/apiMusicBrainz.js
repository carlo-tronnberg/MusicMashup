const jp = require('jsonpath');
const { fetchApi } = require('./fetchApi');
const { Album } = require('../domain/album');
const CoverArtArchive = require('./apiCoverArtArchive');

async function getWikiDataId(mbid) {
  const url = `https://musicbrainz.org/ws/2/artist/${mbid}?fmt=json&inc=url-rels%2Brelease-groups`; // 5b11f4ce-a62d-471e-81fc-a69a8278c7da

  return fetchApi(url)
    .then(async (mbdata) => {
      return jp
        .query(mbdata, '$.relations[*].url.resource')
        .filter((item) => item.includes('www.wikidata.org'))[0]
        .split('/')
        .pop();
    })
    .catch((err) => {
      throw err;
    });
}

async function getAlbums(mbid, musicController) {
  const url = `https://musicbrainz.org/ws/2/artist/${mbid}?fmt=json&inc=release-groups`; // 5b11f4ce-a62d-471e-81fc-a69a8278c7da

  return fetchApi(url).then(async (mbdata) => {
    return Promise.all(
      mbdata['release-groups'].map(async (album) => {
        return new Album(
          album.title,
          album.id,
          await CoverArtArchive.getImage(album.id).catch(() => {
            musicController.addIssue(
              `Could not fetch image for ${mbdata.name}'s album '${album.title}'`,
            );

            // What to return instead of the missing image URL
            return 'N/A';
          }),
        );
      }),
    );
  });
}

module.exports = {
  getWikiDataId,
  getAlbums,
};

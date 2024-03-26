const { fetchApi } = require('./fetchApi');

async function getImage(coverId) {
  const url = `https://coverartarchive.org/release-group/${coverId}`; // 1b022e01-4da6-387b-8658-8678046e4cef

  return fetchApi(url).then(async (coverData) => {
    return coverData.images[0].image;
  });
}

module.exports = {
  getImage,
};

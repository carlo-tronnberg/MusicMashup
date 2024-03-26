const { fetchApi } = require('./fetchApi');

async function getWikipediaData(titles) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&redirects=true&titles=${titles}`; // Nirvana_(band)

  function cleanDescription(description) {
    return description
      .replace(/<p class="mw-empty-elt">(\n)+<\/p>(\n)+/, '')
      .replace(/(\n)+$/, '');
  }

  return fetchApi(url).then((data) => {
    const description = data.query.pages[Object.keys(data.query.pages)].extract;

    return cleanDescription(description);
  });
}

module.exports = {
  getWikipediaData,
};

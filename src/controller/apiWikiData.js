const { fetchApi } = require('./fetchApi');

async function getWikiDataData(ids) {
  const url = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${ids}&format=json&props=sitelinks`; // Q11649

  return fetchApi(url).then((data) => {
    return data.entities[Object.keys(data.entities)].sitelinks.enwiki.title;
  });
}

module.exports = {
  getWikiDataData,
};

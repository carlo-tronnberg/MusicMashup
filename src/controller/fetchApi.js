const fetch = require('node-fetch');

async function fetchApi(url) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.6.1',
    },
  };

  const res = await fetch(url, {
    // signal: AbortSignal.timeout(5000),
    options,
  });

  // Workaround for HTML error message from API
  if (res.status && res.status !== 200) {
    const err = new Error(res.statusText);
    err.status = res.status;

    throw err;
  }

  return res.json();
}

module.exports = {
  fetchApi,
};

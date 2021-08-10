const fetch = require('node-fetch');

/**
 * Short url
 *
 * @param {!string} url url to short
 * @returns {Promise} return Promise
 */
async function short(url = '') {
  try {
    const shortUrl = await fetch(`https://is.gd/create.php?format=simple&url=${url}`);
    return shortUrl.text();
  } catch (ex) {
    throw new Error(ex);
  }
}

module.exports = short;

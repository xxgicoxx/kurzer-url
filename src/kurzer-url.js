const request = require('request-promise-native');

/**
 * Short url
 *
 * @param {!string} url url to short
 * @returns {Promise} return Promise
 */
async function short(url = '') {
  try {
    const shortUrl = await request({ url: `https://is.gd/create.php?format=simple&url=${url}`, json: true });
    return shortUrl;
  } catch (ex) {
    throw new Error(ex);
  }
}

module.exports = short;

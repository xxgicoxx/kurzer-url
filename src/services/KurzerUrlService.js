const { request } = require('../utils');

const { apiConfig } = require('../configs');

class KurzerUrlService {
  async short(url, options = {}) {
    if (!url) {
      throw new Error("'url' cannot be empty");
    }

    const qs = { url, ...options, ...{ format: 'json' } };

    const shorturl = await request({
      url: (`${apiConfig.url}`), qs, type: qs.callback == null ? 'json' : 'text',
    });

    return shorturl;
  }

  async stats(url) {
    if (!url) {
      throw new Error("'url' cannot be empty");
    }

    return {
      statsurl: `https://is.gd/stats.php?url=${url.replace('https://is.gd/', '')}`,
    };
  }
}

module.exports = KurzerUrlService;
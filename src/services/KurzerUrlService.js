const { constants, request } = require('../utils');

const { apiConfig } = require('../configs');

class KurzerUrlService {
  async short(url, options = {}) {
    if (!url) {
      throw new Error(constants.MESSAGE_URL_CANNOT_EMPTY);
    }

    const qs = { url, ...options, ...{ format: constants.FORMAT_JSON } };

    const shorturl = await request({
      url: (`${apiConfig.createUrl}`), qs, type: qs.callback == null ? constants.FORMAT_JSON : constants.FORMAT_TEXT,
    });

    return shorturl;
  }

  async stats(url) {
    if (!url) {
      throw new Error(constants.MESSAGE_URL_CANNOT_EMPTY);
    }

    return {
      statsurl: `${apiConfig.statsUrl}${url.replace(apiConfig.url, '')}`,
    };
  }
}

module.exports = KurzerUrlService;

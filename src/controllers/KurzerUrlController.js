const { KurzerUrlService } = require('../services');

class KurzerUrlController {
  constructor() {
    this._service = new KurzerUrlService();
  }

  /**
   * Short url
   *
   * @param {string} url Url to short
   * @param {Object} [options] Options
   * @param {string} [options.callback] Callback
   * @param {string} [options.shorturl] Short URL
   * @param {number} [options.logstats] Log stats
   *
   * @returns {Promise} Promise
   */
  short(url, options = {}) {
    return this._service.short(url, options);
  }

  /**
   * Stats url
   *
   * @param {string} url Url to stats
   *
   * @returns {Promise} Promise
   */
  stats(url) {
    return this._service.stats(url);
  }
}

module.exports = KurzerUrlController;

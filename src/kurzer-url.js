const request = require('request-promise');

short = (url) => {
	return new Promise((resolve, reject) => {
		request({
			url: `https://is.gd/create.php?format=simple&url=${url}`,
			json: true
		}).then((response) => {
			resolve(response);
		}).catch((error) => {
			reject(error);
		});
	});
}

module.exports = {
	short: short
}
# kurzer-url
is.gd API wrapper for Node.js.

<p align="center">
  <img src="assets/imgs/kurzer-url.png">
</p>

# Features
* Short URL
* URL stats

# Docs
* [Documentation](https://is.gd/apishorteningreference.php)

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install kurzer-url
````

# Example
```javascript
const Kurzer = require('kurzer-url');

const kurzer = new Kurzer();

(async () => {
  try {
    const shortUrl = await kurzer.short('https://google.com.br/');
    console.log(shortUrl);

    const statsUrl = await kurzer.stats('https://is.gd/YS736B');
    console.log(statsUrl);
  } catch (error) {
    console.error(error);
  }
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)
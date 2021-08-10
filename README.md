# kurzer-url
Node.js package for shorten url.

<p align="center">
  <img src="https://i.imgur.com/QjtB6lU.png">
</p>

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install kurzer-url
````

# Example
```javascript
var kurzer = require('kurzer-url');

kurzer('https://google.com.br/').then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)
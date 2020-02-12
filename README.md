# kurzer-url
Node package to shorten url.

### Installation
````
npm install kurzer-url
````

### Example
```javascript
var kurzer = require('kurzer-url');

kurzer.short('https://google.com.br/').then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
```

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)
# kurzer-url
kurzer-url is a node package to shorten url.

### Installation
````
npm install kurzer-url
````

### Example
```javascript
var kurzer = require('kurzer-url');

kurzer.short('https://google.com.br/').then((response) => {
    //Short URL
}).catch((error) => {
    //Error
});
```

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)
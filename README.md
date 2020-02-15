# kurzer-url
Node package to shorten url.

<p align="center">
  <img src="https://i.imgur.com/QjtB6lU.png">
</p>

### Installation
````
npm install kurzer-url
````

### Example
```javascript
var kurzer = require('kurzer-url');

kurzer('https://google.com.br/').then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### Response example
````
https://is.gd/YS736B
````

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)

### Acknowledgments
* [FlatIcon](https://www.flaticon.com/) - Icon
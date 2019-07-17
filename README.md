# kurzer-url

kurzer-url is a node package to shorten url.

# Installation
````
npm install kurzer-url --save
````

# Example
````
var kurzer = require('kurzer-url');

kurzer.short('https://google.com.br/').then((response) => {
    //Short URL
}).catch((error) => {
    //Error
});
````
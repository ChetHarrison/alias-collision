### alias-collision

This is a node.js micro library that will prefix any strings in a reserve words list and provides and inverse operation to avoid conflicts when writing code that will potentially collide with the codes syntax. Comes with a default list of ES5 resurve words.

## Installation

`npm install alias-collision`

## Use

```js
var aliasCollision = require('alias-collision.js'),
	resurveWord = 'function';
	
resurveWord = aliasCollision.prefix(resurveWord);
console.log(resurveWord);  // reserve_function

resurveWord = aliasCollision.unPrefix(resurveWord);
console.log(resurveWord);  // function

// alias-collision is idempotent
resurveWord = aliasCollision.unPrefix(resurveWord);
console.log(resurveWord);  // function

// add custom prefix
aliasCollision.setPrefix('new-prefix-');
resurveWord = aliasCollision.prefix(resurveWord);
console.log(resurveWord);  // new-prefix-function

// check the prefix
console.log(aliasCollision.getPrefix());  // new-prefix-

// alias-collision will not alias words that are not
// on the resurve word list.

resurveWord = aliasCollision.prefix('aintItFunkyNow');
console.log(resurveWord);  // aintItFunkyNow

// add words to the collision list
aliasCollision.addReserveWords('aintItFunkyNow');
resurveWord = aliasCollision.prefix(resurveWord);
console.log(resurveWord);  // new-prefix-aintItFunkyNow
	;
```


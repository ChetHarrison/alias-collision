### alias-collision

This is a node.js micro library that will prefix any strings in a reserve words list and provides and inverse operation to avoid conflicts when writing code that will potentially collide with the codes syntax. Comes with a default list of ES5 reserve words.

## Installation

`npm install alias-collision`

## Use

```js
var aliasCollision = require('alias-collision.js'),
	reserveWord = 'function';

// alias a reserve word
reserveWord = aliasCollision.prefix(reserveWord);
console.log(reserveWord);  // reserve_function

// un-alias a reserve word
reserveWord = aliasCollision.unPrefix(reserveWord);
console.log(reserveWord);  // function

// alias-collision is idempotent
reserveWord = aliasCollision.unPrefix(reserveWord);
console.log(reserveWord);  // function

// add custom prefix
aliasCollision.setPrefix('new-prefix-');
reserveWord = aliasCollision.prefix(reserveWord);
console.log(reserveWord);  // new-prefix-function

// check the prefix
console.log(aliasCollision.getPrefix());  // new-prefix-

// alias-collision will not alias words that are not
// on the reserve word list.
reserveWord = aliasCollision.prefix('aintItFunkyNow');
console.log(reserveWord);  // aintItFunkyNow

// add words to the collision list
aliasCollision.addReserveWords('aintItFunkyNow');
reserveWord = aliasCollision.prefix(reserveWord);
console.log(reserveWord);  // new-prefix-aintItFunkyNow
	;
```


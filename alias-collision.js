'use strict';

var _ = require('lodash'),


	_reserveWords = require('resurve-words/javascript.js'),
	
	
	_reserveWordPrefix = 'reserve_',
	
	
	_prefixLength = _reserveWordPrefix.length,
	
	
	_isPrefixed = function(word) {
		var prefix;
			
		if (word.length < _prefixLength) { return false; }
		
		prefix = word.slice(0, _prefixLength);
		
		if (prefix === _reserveWordPrefix) { return true; }
		
		return false;
	},
	
	
	alias =  {
		setPrefix: function(prefix) {
			_reserveWordPrefix = prefix;
			_prefixLength = _reserveWordPrefix.length;
		},
		
		
		getPrefix: function(prefix) {
			return _reserveWordPrefix;
		},
		
		
		addReserveWords: function(words) {
			if (_.isString(words)) {
				words = [words];
			}
			_reserveWords = _.union(_reserveWords, words);
		},
		
		
		prefix: function(word) {
			if (_isPrefixed(word)) { return word; } // idempotent
			
			if (_.contains(_reserveWords, word)) {
				word = _reserveWordPrefix + word;
			}
			
			return word;
		},
		
		
		unPrefix: function(word) {
			if (!_isPrefixed(word)) { return word; } // idempotent
			
			return word.slice(_prefixLength);
		}
	};

module.exports = alias;


// tests
// console.log(alias.prefix('chet')); // chet

// var target = alias.prefix('constructor');
// console.log(target);// reserve_constructor
// target = alias.unPrefix(target);
// console.log(target); //constructor

// alias.addReserveWords('jason');
// var target = alias.prefix('jason');
// console.log(target); // reserve_jason
// target = alias.unPrefix(target);
// console.log(target); // jason
// alias.addReserveWords(['chet', 'mark']);

// var target = alias.prefix('chet');
// console.log(target); // reserve_chet
// target = alias.prefix('chet');
// console.log(target); // reserve_chet
// target = alias.unPrefix(target);
// console.log(target); // chet
// target = alias.unPrefix(target);
// console.log(target); // chet

	

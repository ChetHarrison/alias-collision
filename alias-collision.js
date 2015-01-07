'use strict';

var _ = require('lodash'),
	_reserveWords = require('./reserve-words/javascript.js'),
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
		
		
		
		getPrefix: function() {
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
			var unPrefixedWord;
			if (!_isPrefixed(word)) { return word; } // idempotent
			
			unPrefixedWord = word.slice(_prefixLength);
			
			if (_.contains(_reserveWords, unPrefixedWord)) {
				word = unPrefixedWord;
			}
			
			return word;
		}
	};

module.exports = alias;


	

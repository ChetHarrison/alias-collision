'use strict';

var alias = require('../../alias-collision.js'),
	result;

describe('alias-collision', function() {
  it('prepend default prefix to reserve word funciton', function() {
  	result = alias.prefix('function');
    expect(result).toBe('reserve_function');
  });
  
  it('prepend default prefix to reserve word funciton should be idempotent', function() {
  	result = alias.prefix('function');
    expect(result).toBe('reserve_function');
  });
  
  it('should not prepend default prefix to non reserve word chet', function() {
  	result = alias.prefix('chet');
    expect(result).not.toBe('reserve_function');
  });
  
  it('should unprepend reserve word', function() {
  	result = alias.unPrefix('reserve_function');
    expect(result).toBe('function');
  });
  
  it('unprepend should be idempotent', function() {
  	result = alias.unPrefix('reserve_function');
    expect(result).toBe('function');
  });
  
  it('unprepend should not work on non reserve words', function() {
  	result = alias.unPrefix('reserve_funky');
    expect(result).toBe('reserve_funky');
  });
  
  it('be able to add arrays to reserve words list', function() {
  	alias.addReserveWords(['chet', 'mark']);
    expect(alias.prefix('chet')).toBe('reserve_chet');
    expect(alias.prefix('mark')).toBe('reserve_mark');
  });
  
  it('be able to add a string to reserve words list', function() {
  	alias.addReserveWords('linda');
    expect(alias.prefix('linda')).toBe('reserve_linda');
  });
  
  it('get prefix should return "reserve_" default prefix', function() {
    expect(alias.getPrefix()).toBe('reserve_');
  });
  
  it('set prefix "new_prefix_" and prefix "function" should return "new_prefix_function"', function() {
    alias.setPrefix('new_prefix_');
    expect(alias.prefix('function')).toBe('new_prefix_function');
  });
});


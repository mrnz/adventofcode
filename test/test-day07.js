var assert = require('assert'),
    day7part1 = require('../day07/7-1.js');

describe('Day 7', function() {

  describe('Part One', function() {

    it('should return 1 when input is 1 -> a', function () {
      assert.equal( 1, day7part1(['1 -> a']) );
    });

    it('should return 1 when input is 1 -> a', function () {
      assert.equal( 10, day7part1(['10 AND 10 -> a']) );
    });

    it('should return 10 when input is 10 OR 10 -> a', function () {
      assert.equal( 10, day7part1(['10 OR 10 -> a']) );
    });
    
    it('should return 957824 when input is 7483 LSHIFT 7 -> a', function () {
      assert.equal( 957824, day7part1(['7483 LSHIFT 7 -> a']) );
    });

    it('should return 65534 when input is NOT 1 -> a', function () {
      assert.equal( 65534, day7part1(['NOT 1 -> a']) );
    });
    
  });

  describe('Part Two', function() {
  	it('should return 1 when input is 1 -> a', function () {
      assert.equal( 98, day7part1(['b -> a'] ,'a','b', 98) );
    });

    it('should return 1 when input is 1 -> a', function () {
      assert.equal( 58, day7part1(['7483 RSHIFT 7 -> a']) );
    });
  });

});
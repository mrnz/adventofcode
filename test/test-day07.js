var assert = require('assert'),
    day7part1 = require('../day07/7-1.js');

describe('Day 8', function() {

  describe('Part One', function() {

    it('should return 1 when input is 1 -> a', function () {
      assert.equal( 1, day7part1(['1 -> a']) );
    });

    it('should return 1 when input is 1 -> a', function () {
      assert.equal( 10, day7part1(['10 AND 10 -> a']) );
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
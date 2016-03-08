var assert = require('assert'),
    day1part1 = require('../day01/1-1.js'),
    day1part2 = require('../day01/1-2.js');

describe('Day 1', function() {

  describe('Part One', function() {

    it('should return 0 when input string is empty', function () {
      assert.equal( 0, day1part1('') );
    });

    it('should return -1 when input string is ")"', function () {
      assert.equal( -1, day1part1(')') );
    });

    it('should return 0 when input string is "()()()()"', function () {
      assert.equal( 0, day1part1('()()()()') );
    });

    it('should return -4 when input string is "))))"', function () {
      assert.equal( -4, day1part1('))))') );
    });

  });

  describe('Part Two', function() {
    
    it('should return false when input string is empty', function () {
      assert.equal( false, day1part2('') );
    });

    it('should return 1 when input string is ")"', function () {
      assert.equal( 1, day1part2(')') );
    });

    it('should return 0 when input string is "()()()()"', function () {
      assert.equal( false, day1part2('()()()()') );
    });

    it('should return 7 when input string is "((()))))))"', function () {
      assert.equal( 7, day1part2('((()))))))') );
    });

  });

});
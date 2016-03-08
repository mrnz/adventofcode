var assert = require('assert'),
    day10part1 = require('../day10/10-1.js');

describe('Day 10', function() {

  describe('Part One', function() {

    it('should return 4 when input is 1 and number of loops is 1', function () {
      assert.equal( 2, day10part1('1', 1) );
    });
    
    it('should return 2 when input is 11 and number of loops is 1', function () {
      assert.equal( 2, day10part1('11', 1) );
    });

    it('should return 4 when input is 21 and number of loops is 1', function () {
      assert.equal( 4, day10part1('21', 1) );
    });

    it('should return 6 when input is 1211 and number of loops is 1', function () {
      assert.equal( 6, day10part1('1211', 1) );
    });

    it('should return 6 when input is 111221 and number of loops is 1', function () {
      assert.equal( 6, day10part1('111221', 1) );
    });
    
    it('should return 6 when input is 1 and number of loops is 5', function () {
      assert.equal( 6, day10part1('1', 5) );
    });
  });

  describe('Part Two', function() {
    
  });

});
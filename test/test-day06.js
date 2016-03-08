var assert = require('assert'),
    day6part1 = require('../day6/6-1.js'),
    day6part2 = require('../day6/6-2.js');

describe('Day 6', function() {

  describe('Part One', function() {

    it('should return 1000000 when input is "turn on 0,0 through 999,999', function () {
      assert.equal( 1000000, day6part1(['turn on 0,0 through 999,999']) );
    });

    it('should return 1000 when input is "toggle 0,0 through 999,0"', function () {
      assert.equal( 1000, day6part1(['toggle 0,0 through 999,0']) );
    });

    it('should return 0 when input is "turn on 499,499 through 500,500"', function () {
      assert.equal( 1, day6part1(['turn on 499,499 through 499,499']) );
    });

  });

  describe('Part Two', function() {

    it('should return 2000000 when input is "toggle 0,0 through 999,999"', function () {
      assert.equal( 2000000, day6part2(['toggle 0,0 through 999,999']) );
    });

    it('should return 1 when input is "turn on 0,0 through 0,0"', function () {
      assert.equal( 1, day6part2(['turn on 0,0 through 0,0']) );
    });

  });

});
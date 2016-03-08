var assert = require('assert'),
    day5part1 = require('../day5/5-1.js'),
    day5part2 = require('../day5/5-2.js');

describe('Day 5', function() {

  describe('Part One', function() {

    it('should return 0 when input is empty string', function () {
      assert.equal( 0, day5part1(['']) );
    });

    it('should return 0 when input is "abcdefg"', function () {
      assert.equal( 0, day5part1(['abcdefg']) );
    });
    
    it('should return 0 when input is "aaaaaaab"', function () {
      assert.equal( 0, day5part1(['aaaaaaab']) );
    });
    
    it('should return 1 when input is "aaaaaaa"', function () {
      assert.equal( 1, day5part1(['aaaaaaa']) );
    });

  });

  describe('Part Two', function() {
    
    it('should return 0 when input is empty string', function () {
      assert.equal( 0, day5part2(['']) );
    });

    it('should return 1 when input is "xyxyx"', function () {
      assert.equal( 1, day5part2(['xxyxx']) );
    });

    it('should return 1 when input is "qjhvhtzxzqqjkmpb"', function () {
      assert.equal( 1, day5part2(['qjhvhtzxzqqjkmpb']) );
    });

    it('should return 0 when input is "uurcxstgmygtbstg"', function () {
      assert.equal( 0, day5part2(['uurcxstgmygtbstg']) );
    });

    it('should return 0 when input is "ieodomkazucvgmuy"', function () {
      assert.equal( 0, day5part2(['ieodomkazucvgmuy']) );
    });

  });

});
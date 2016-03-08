var assert = require('assert'),
    day2part1 = require('../day02/2-1.js')
    day2part2 = require('../day02/2-2.js');

describe('Day 2', function() {

  describe('Part One', function() {

    it('should return 7 when input array is ["1x1x1"]', function () {
      assert.equal( 7, day2part1(['1x1x1']) );
    });

    it('should return 35 when input array is ["1x1x1", "2x2x2"]', function () {
      assert.equal( 35, day2part1(['1x1x1','2x2x2']) );
    });

    it('should return 24 when input array is ["1x2x3"]', function () {
      assert.equal( 24, day2part1(['1x2x3']) );
    });

  });

  describe('Part Two', function() {
    
    it('should return 12 when input array is ["1x2x3"]', function () {
      assert.equal( 12, day2part2(['1x2x3']) );
    });
    
    it('should return 21 when input array is ["1x1x1", "2x2x2"]', function () {
      assert.equal( 21, day2part2(['1x1x1','2x2x2']) );
    });

    it('should return 24 when input array is ["1x2x3"]', function () {
      assert.equal( 12, day2part2(['1x2x3']) );
    });
    

  });

});
var assert = require('assert'),
    day9 = require('../day09/9-1.js');

var testTable1 = ['A to B = 1', 'B to C = 2', 'A to C = 3'];

describe('Day 10', function() {

  describe('Part One', function() {
    
    it('should return 3 as a shortest way', function () {
      assert.equal( 3, day9(testTable1, 'shortest') );
    });
    
   
  });

  describe('Part Two', function() {
    
    it('should return 5 as a longest way', function () {
      assert.equal( 5, day9(testTable1, 'longest') );
    });

  });

});
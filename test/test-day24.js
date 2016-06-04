var assert = require('assert'),
    d24_1 = require('./../day24/24-1.js');

describe('Day 24', function() {
  
  var test1 = [1,2,3,4,5,7,8,9,10,11];
  
  describe('Part One', function() {
    
    it('should return 99 when input is a example from adventofcode.com - groups 3', function () {
      assert.equal( 99, d24_1(test1,3) );
    }); 

  });

  describe('Part Two', function() {
    
    it('should return 44 when input is a example from adventofcode.com - groups 4', function () {
      assert.equal( 44, d24_1(test1,4) );
    });  
     
  });

});
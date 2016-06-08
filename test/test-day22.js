var assert = require('assert'),
    d22_1 = require('./../day22/22-1.js');

describe('Day 22', function() {
  
  
  
  describe('Part One', function() {
    
    it('should return 53 when boss has 1 HP and 10 attack', function () {
      assert.equal( 53, d22_1(1,10,false) );
    }); 

    it('should return 106 when boss has 5 HP and 10 attack', function () {
      assert.equal( 106, d22_1(5,10,false) );
    }); 

  });

  describe('Part Two', function() {
    
    it('should return 53 when boss has 1 HP and 10 attack', function () {
      assert.equal( 53, d22_1(1,10,true) );
    }); 

    it('should return 106 when boss has 5 HP and 10 attack', function () {
      assert.equal( 106, d22_1(5,10,true) );
    });      
  });

});
var fs = require('fs'),
 		assert = require('assert'),
    d17_1 = require('../day17/17-1.js'),
    d17_2 = require('../day17/17-2.js');
    


describe('Day 17', function() {

  describe('Part One', function() {

    it('should return 1 when input is [1,2,3] and target 6', function () {
      assert.equal( 1, d17_1([1,2,3],6) );
    });

    it('should return 1 when input is [1,2,3] and target 1', function () {
      assert.equal( 1, d17_1([1,2,3],1) );
    });
    
    it('should return 4 when input is [20,15,10,5,5] and target 25', function () {
      assert.equal( 4, d17_1([20,15,10,5,5],25) );
    }); 

  });

  describe('Part Two', function() {

    it('should return 3 when input is [10,10,10] and target 25', function () {
      assert.equal( 3, d17_2([10,10,10],10) );
    }); 
    
    it('should return 3 when input is [20,15,10,5,5] and target 25', function () {
      assert.equal( 3, d17_2([20,15,10,5,5],25) );
    }); 

  });

});
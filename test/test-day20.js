var assert = require('assert'),
    d20_1 = require('../day20/20-1.js');



describe('Day 20', function() {

  describe('Part One', function() {

    it('should return 2 when input is 30 and repetition is 10', function () {
      assert.equal( 2, d20_1(30,10) );
    }); 
    
    it('should return 4 when input is 70 and repetition is 10', function () {
      assert.equal( 4, d20_1(70,10) );
    });   

    it('should return 8 when input is 150 and repetition is 10', function () {
      assert.equal( 8, d20_1(150,10) );
    });   

  });

  describe('Part Two', function() {
    
    it('should return 10 when input is 150 and repetition is 10 and limit is 2', function () {
      assert.equal( 10, d20_1(150,10,2) );
    });   

    it('should return 18 when input is 300 and repetition is 10 and limit is 2', function () {
      assert.equal( 18, d20_1(300,10,2) );
    });

    it('should return 120 when input is 3000 and repetition is 10 and limit is 10', function () {
      assert.equal( 120, d20_1(3000,10,10) );
    });     
     
  });

});
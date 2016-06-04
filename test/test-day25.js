var assert = require('assert'),
    d25_1 = require('./../day25/25-1.js');

describe('Day 25', function() { 
  
  describe('Part One', function() {
    
    it('should return 77061 for row 5 and column 1 ', function () {
      assert.equal( 77061, d25_1(5,1) );
    }); 

    it('should return 9380097 for row 4 and column 4 ', function () {
      assert.equal( 9380097, d25_1(4,4) );
    }); 

    it('should return 27995004 for row 6 and column 6 ', function () {
      assert.equal( 27995004, d25_1(6,6) );
    }); 

  });

});
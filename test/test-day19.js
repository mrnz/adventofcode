var assert = require('assert'),
    d19_1 = require('../day19/19-1.js');



describe('Day 19', function() {

  describe('Part One', function() {

  	var testTransf1 = ["H => OH"]
    it('should return 2 when input is "H => OH" and molecule is "HH"', function () {
      assert.equal( 2, d19_1('HH',testTransf1) );
    }); 
    
    var testTransf = ["H => HO", "H => OH", "O => HH"];
    it('should return 4 when input is "H => HO", "H => OH", "O => HH" and molecule is "HOH"', function () {
      assert.equal( 4, d19_1('HOH',testTransf) );
    });

    it('should return 4 when input is "H => HO", "H => OH", "O => HH" and molecule is "HOHOHO"', function () {
      assert.equal( 7, d19_1('HOHOHO',testTransf) );
    });   

  })

  describe('Part Two', function() {
    
     
     
  });

});

var fs = require('fs'),
 		assert = require('assert'),
 		test_data = input = fs.readFileSync('day18/day18-input-test.txt').toString().split('\n'),
    d18_1 = require('../day18/18-1.js'),
    d18_2 = require('../day18/18-2.js');
    


describe('Day 18', function() {

  describe('Part One', function() {
    
    it('should return 15 when input is test_data in one steps', function () {
      assert.equal( 15, d18_1(test_data,1) );
    });

    it('should return 15 when input is test_data in two steps', function () {
      assert.equal( 13, d18_1(test_data,2) );
    });
        
  });

  describe('Part Two', function() {
    it('should return 18 when input is test_data in one step', function () {
      assert.equal( 18, d18_2(test_data,1) );
    });

    it('should return 18 when input is test_data in four steps', function () {
      assert.equal( 14, d18_2(test_data,4) );
    });
  });

});
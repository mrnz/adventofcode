var assert = require('assert'),
		fs = require('fs'),
    input = fs.readFileSync(__dirname+'/../day21/day21-input.txt').toString().split('\n'),
    d21_1 = require('./../day21/21-1.js');

describe('Day 21', function() {

  describe('Part One', function() {

    it('should return 111 when input is from adventofcode.com and win is true', function () {
      assert.equal( 111, d21_1(input,true) );
    }); 

  });

  describe('Part Two', function() {
    
    it('should return 188 when input is from adventofcode.com and win is false', function () {
      assert.equal( 188, d21_1(input,false) );
    }); 
     
  });

});
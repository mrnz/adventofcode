var assert = require('assert'),
    day13part1 = require('../day13/13-1.js'),
    day13part2 = require('../day13/13-2.js'),
    fs = require('fs'),
    input = fs.readFileSync(__dirname+'/../day13/day13-input-test.txt').toString().split('\n');

describe('Day 13', function() {

  describe('Part One', function() {

   

    it('should return 330 when input is test-input from adventofcode.com', function () {
      assert.equal( 330, day13part1(input) );
    });
   
  });

  describe('Part Two', function() {
    
    it('should return 286 when input is test-input from adventofcode.com', function () {
      assert.equal( 286, day13part2(input) );
    });

  });

});
var assert = require('assert'),
    day15part1 = require('../day15/15-1.js'),
    fs = require('fs'),
    input = fs.readFileSync(__dirname+'/../day15/day15-input.txt').toString().split('\n');

                                  
describe('Day 15', function() {
 
  describe('Part One', function() {
    it('should return 18965440 when input is test-input from adventofcode.com', function () {
      assert.equal( 1760, day15part1(input,10) );
    });
  });

  describe('Part Two', function() {
    it('should return 30720 when input is test-input from adventofcode.com and max calories is 300', function () {
      assert.equal( 1760, day15part1(input,10,300) );
    });
  });

});
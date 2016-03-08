var assert = require('assert'),
    day14part1 = require('../day14/14-1.js');
    day14part2 = require('../day14/14-2.js'),
    fs = require('fs'),
    input = fs.readFileSync(__dirname+'/../day14/day14-input-test.txt').toString(),
    lines = input.split('\n');

describe('Day 14', function() {

  describe('Part One', function() {

    it('should return 16 when input is 1 second', function () {
      assert.equal( 16, day14part1(lines, 1) );
    });

    it('should return 176 when input is 100 seconds', function () {
      assert.equal( 176, day14part1(lines, 100) );
    });

    it('should return 352 when input is 200 seconds', function () {
      assert.equal( 352, day14part1(lines, 200) );
    });
    
    it('should return 1120 when input is 1000 seconds', function () {
      assert.equal( 1120, day14part1(lines, 1000) );
    });

  });

  describe('Part Two', function() {
    
    it('should return 1 when input is 1 second', function () {
      assert.equal( 1, day14part2(lines, 1) );
    });
    
    it('should return 139 when input is 140 seconds', function () {
      assert.equal( 139, day14part2(lines, 140) );
    });

    it('should return 689 when input is 1000 seconds', function () {
      assert.equal( 689, day14part2(lines, 1000) );
    });

  });

});
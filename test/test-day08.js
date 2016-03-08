var assert = require('assert'),
    day8part1 = require('../day8/8-1.js'),
    day8part2 = require('../day8/8-2.js');


var fs = require('fs');
var input = fs.readFileSync(__dirname+'/../day8/day8-input-test.txt').toString();
var lines = input.split('\n');

describe('Day 8', function() {

  describe('Part One', function() {

    it('should return 2 when input is ' + lines[0], function () {
      assert.equal( 2, day8part1([lines[0]]) );
    });

    it('should return 2 when input is ' + lines[1], function () {
      assert.equal( 2, day8part1([lines[1]]) );
    });
    
    it('should return 3 when input is ' + lines[2], function () {
      assert.equal( 3, day8part1([lines[2]]) );
    });

    it('should return 5 when input is ' + lines[3], function () {
      assert.equal( 5, day8part1([lines[3]]) );
    });    

  });

  describe('Part Two', function() {

    it('should return 4 when input is ' + lines[0], function () {
      assert.equal( 4, day8part2([lines[0]]) );
    });

    it('should return 4 when input is ' + lines[1], function () {
      assert.equal( 4, day8part2([lines[1]]) );
    });
    
    it('should return 6 when input is ' + lines[2], function () {
      assert.equal( 6, day8part2([lines[2]]) );
    });

    it('should return 5 when input is ' + lines[3], function () {
      assert.equal( 5, day8part2([lines[3]]) );
    });  

  });

});
var assert = require('assert'),
    day3part1 = require('../day03/3-1.js')
    day3part2 = require('../day03/3-2.js');

describe('Day 3', function() {

  describe('Part One', function() {

    it(' with ">" should santa delivers presents to 2 houses', function () {
      assert.equal( 2, day3part1('>') );
    });
    it(' with ">><<" should santa delivers presents to 3 houses', function () {
      assert.equal( 3, day3part1('>><<') );
    });

    it(' with "<^v>" should santa delivers presents to 4 houses', function () {
      assert.equal( 3, day3part1('<^v>') );
    });
  });

  describe('Part Two', function() {
    
    it(' with "^v" should santa delivers presents to 3 houses', function () {
      assert.equal( 3, day3part2('^v') );
    });
    it(' with "^>v<" should santa delivers presents to 3 houses', function () {
      assert.equal( 3, day3part2('^>v<') );
    });

    it(' with "^v^v^v^v^v" should santa delivers presents to 11 houses', function () {
      assert.equal( 11, day3part2('^v^v^v^v^v') );
    });

  });

});
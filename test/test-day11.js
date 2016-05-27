var assert = require('assert'),
    day11part1 = require('../day11/11-1.js');

describe('Day 11', function() {

  describe('Part One', function() {

    it('Should return abcdffaa when input is abcdefgh', function () {
      assert.equal( 'abcdffaa', day11part1('abcdefgh') );
    });

    it('Should return ghjaabba when input is ghijklmn', function () {
      assert.equal( 'ghjaabba', day11part1('ghijklmn') );
    });
    
  });

  describe('Part Two', function() {
    it('Should return mmnpp when input is lllll', function () {
      this.timeout(5000);
      assert.equal( 'aabcc', day11part1('lll') );
    });
  });

});
var assert = require('assert'),
    day11part1 = require('../day11/11-1.js');

describe('Day 11', function() {
  this.timeout(8000);
  describe('Part One', function() {

    it('Should return abcdffaa when input is abcdefgh', function () {
      assert.equal( 'abcdffaa', day11part1('abcdefgh') );
    });

    it('Should return ghjaabba when input is ghijklmn', function () {
      assert.equal( 'ghjaabba', day11part1('ghijklmn') );
    });


    // it('Should return xz when input is xx', function () {
    //   assert.equal( 'xz', day11part1('xy') );
    // });

    // it('Should return xz when input is xx', function () {
    //   assert.equal( 'ba', day11part1('az') );
    // });

    // it('Should return p when input is o', function () {
    //   assert.equal( 'aabb', day11part1('aaba') );
    // });
    // it('Incrementing is just like counting with numbers: xx, xy, xz, ya, yb, and so on. Should return ya when input is xz', function () {
    //   assert.equal( 'ya', day11part1('xz') );
    // });

    // it('Passwords must include one increasing straight of at least three letters, like abc, bcd, cde, and so on, up to xyz. They cannot skip letters; abd doesn\'t count', function () {
    //   assert.equal( 1, day11part1('da') );
    // });
    
    
  });

  describe('Part Two', function() {
    
  });

});
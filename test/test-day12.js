var assert = require('assert'),
    day12part1 = require('../day12/12-1.js');
    day12part2 = require('../day12/12-2.js');

describe('Day 12', function() {

  describe('Part One', function() {

    it('should return 6 when input is [1,2,3]', function () {
      assert.equal( 6, day12part1('[1,2,3]') );
    });

    it('should return 6 when input is {"a":2,"b":4}', function () {
      assert.equal( 6, day12part1('{"a":2,"b":4}') );
    });
    
    it('should return 3 when input is [[[3]]]', function () {
      assert.equal( 3, day12part1('[[[3]]]') );
    });

    it('should return 3 when input is {"a":{"b":4},"c":-1}', function () {
      assert.equal( 3, day12part1('{"a":{"b":4},"c":-1}') );
    });

    it('should return 0 when input is {"a":[-1,1]}', function () {
      assert.equal( 0, day12part1('{"a":[-1,1]}') );
    });

    it('should return 0 when input is [-1,{"a":1}]', function () {
      assert.equal( 0, day12part1('[-1,{"a":1}]') );
    });

    it('should return 0 when input is []', function () {
      assert.equal( 0, day12part1('[]') );
    });

    it('should return 0 when input is {}', function () {
      assert.equal( 0, day12part1('{}') );
    });
   
  });

  describe('Part Two', function() {
    
    it('should return 6 when input is [1,2,3]', function () {
      assert.equal( 6, day12part2('[1,2,3]') );
    });

    it('should return 4 when input is [1,{"c":"red","b":2},3]', function () {
      assert.equal( 4, day12part2('[1,{"c":"red","b":2},3]') );
    });

    it('should return 0 when input is {"d":"red","e":[1,2,3,4],"f":5}', function () {
      assert.equal( 0, day12part2('{"d":"red","e":[1,2,3,4],"f":5}') );
    });

    it('should return 6 when input is [1,"red",5]', function () {
      assert.equal( 6, day12part2('[1,"red",5]') );
    });

  });

});
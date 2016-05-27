var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/../day16/day16-input.txt').toString(),
    lines = input.split('\n'),
		assert = require('assert'),
    day16part1 = require('../day16/16-1.js');
    day16part2 = require('../day16/16-2.js');


describe('Day 16', function() {

  describe('Part One', function() {

    it('should return 14 when input is {"cars": 2, "perfumes": 3, "children": 4}', function () {
      assert.equal( 14, day16part1(lines, {cars: 2, perfumes: 3, children: 4}) );
    });

    it('should return 1 when input is {children: 1, cars: 8, vizslas: 7}', function () {
      assert.equal( 1, day16part1(lines, {children: 1, cars: 8, vizslas: 7}) );
    });

    it('should return 500 when input is {cars: 1, perfumes: 6, vizslas: 1}', function () {
      assert.equal( 500, day16part1(lines, {cars: 1, perfumes: 6, vizslas: 1}) );
    });

    it('should return 500 when input is {cars: 1, perfumes: 6, vizslas: 1}', function () {
      assert.equal( 500, day16part1(lines, {cars: 1, perfumes: 6, vizslas: 1}) );
    });

  });

  describe('Part Two', function() {
    
    it('should return 471 when input is {cars: 2, perfumes: 3, children: 4}', function () {
      assert.equal( 471, day16part2(lines, {cars: 2, perfumes: 3, children: 4}) );
    });

    it('should return 411 when input is { children: 3, cats: 7, samoyeds: 2, pomeranians: 3, vizslas: 0, goldfish: 5}', function () {
      assert.equal( 411, day16part2(lines, { children: 3, cats: 7, samoyeds: 2, pomeranians: 3, vizslas: 0, goldfish: 5}) );
    });

  });

});    
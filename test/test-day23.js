var assert = require('assert'),
		fs = require('fs'),
    input = fs.readFileSync(__dirname+'/../day23/day23-input.txt').toString().split('\n'),
    d23_1 = require('./../day23/23-1.js');

describe('Day 23', function() {

  describe('Part One', function() {
    var test1 = ['inc a','jio a, +2','tpl a','inc a'];
    it('should return 2 when input is a example from adventofcode.com', function () {
      assert.equal( 2, d23_1(test1,'a') );
    }); 

    var test2 = ['jmp +1','inc a','jio a, +1','inc a','jie a, +1','tpl a','hlf a'];
    it('should return 3 when input is a my example', function () {
      assert.equal( 3, d23_1(test2,'a') );
    }); 

  });

  // describe('Part Two', function() {
    
  //   it('should return 188 when input is from adventofcode.com and win is false', function () {
  //     assert.equal( 188, d23_1(input,false) );
  //   }); 
     
  // });

});
var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day18-input.txt').toString().split('\n'),
    d18_1 = require('./18-1.js');
    


describe('Day 18', function() {

  describe('Part One', function() {

    it('should return 4 when input is 1 and number of loops is 1', function () {
      assert.equal( 2, d18_1('1') );
    });
    
  });

  describe('Part Two', function() {
    
  });

});
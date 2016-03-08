var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day3-input.txt').toString(),
    d3_1 = require('./3-1.js'),
    d3_2 = require('./3-2.js');


console.log( 'day 3 part 1 - result is: ' + d3_1(input) );
console.log( 'day 3 part 2 - result is: ' + d3_2(input) );
var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day6-input.txt').toString().split('\n'),
    d6_1 = require('./6-1.js'),
    d6_2 = require('./6-2.js');


console.log( 'day 6 part 1 - result is: ' + d6_1(input) );
console.log( 'day 6 part 2 - result is: ' + d6_2(input) );
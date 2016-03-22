var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day13-input.txt').toString().split('\n'),
    d13_1 = require('./13-1.js'),
    d13_2 = require('./13-2.js');

console.log( 'day 13 part 1 - result is: ' + d13_1(input) );
console.log( 'day 13 part 2 - result is: ' + d13_2(input) );

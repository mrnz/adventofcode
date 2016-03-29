var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day21-input.txt').toString().split('\n'),
    d21_1 = require('./21-1.js');

console.log( 'day 21 part 1 - result is: ' + d21_1(input, true) );
console.log( 'day 21 part 2 - result is: ' + d21_1(input, false) );

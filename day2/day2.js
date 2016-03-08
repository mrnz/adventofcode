var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day2-input.txt').toString().split('\n'),
    d2_1 = require('./2-1.js'),
    d2_2 = require('./2-2.js');


console.log( 'day 2 part 1 - result is: ' + d2_1(input) );
console.log( 'day 2 part 2 - result is: ' + d2_2(input) );
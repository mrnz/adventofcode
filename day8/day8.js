var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day8-input.txt').toString().split('\n'),
    d8_1 = require('./8-1.js'),
    d8_2 = require('./8-2.js');


console.log( 'day 8 part 1 - result is: ' + d8_1(input) );
console.log( 'day 8 part 2 - result is: ' + d8_2(input) );
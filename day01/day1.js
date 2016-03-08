var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day1-input.txt').toString(),
    d1_1 = require('./1-1.js'),
    d1_2 = require('./1-2.js');


console.log( 'day 1 part 1 - result is: ' + d1_1(input) );
console.log( 'day 1 part 2 - result is: ' + d1_2(input) );
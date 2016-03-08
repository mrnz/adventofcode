var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day5-input.txt').toString().split('\n'),
    d5_1 = require('./5-1.js'),
    d5_2 = require('./5-2.js');


console.log( 'day 5 part 1 - result is: ' + d5_1(input) );
console.log( 'day 5 part 2 - result is: ' + d5_2(input) );
var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day18-input.txt').toString().split('\n'),
    d18_1 = require('./18-1.js'),
    d18_2 = require('./18-2.js');

console.log( 'day 18 part 1 - result is: ' + d18_1(input ,100) );
console.log( 'day 18 part 2 - result is: ' + d18_2(input ,100) );

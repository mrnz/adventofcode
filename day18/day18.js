var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day18-input.txt').toString().split('\n'),
    d18_1 = require('./18-1.js');

console.log( 'day 18 part 1 - result is: ' + d18_1(input ,100) );


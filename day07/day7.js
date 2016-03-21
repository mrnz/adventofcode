var fs = require('fs'),
		input = fs.readFileSync(__dirname+'/day7-input.txt').toString().split('\n');
    d7_1 = require('./7-1.js'),

console.log( 'day 7 part 1 - result is: ' + d7_1(input, 'a') );
console.log( 'day 7 part 2 - result is: ' + d7_1(input, 'a', 'b', 956) );
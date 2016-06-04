var d23_1 = require('./23-1.js'),
		fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day23-input.txt').toString().split('\n');

console.log( 'day 23 part 1 - result is: ' + d23_1(input) );
console.log( 'day 23 part 2 - result is: ' + d23_1(input, 'b', 1, 0) );

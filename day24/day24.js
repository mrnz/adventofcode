var d24_1 = require('./24-1.js'),
		fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day24-input.txt').toString().split('\n');

console.log( 'day 24 part 1 - result is: ' + d24_1( input, 3) );
console.log( 'day 24 part 2 - result is: ' + d24_1( input, 4) );

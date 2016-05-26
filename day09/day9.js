var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day9-input.txt').toString().split('\n'),
    d9_1 = require('./9-1.js');

console.log( 'day 9 part 1 - result is: ' + d9_1(input, 'shortest') );
console.log( 'day 9 part 2 - result is: ' + d9_1(input, 'longest') );

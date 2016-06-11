var input = require('fs').readFileSync(__dirname+'/day12-input.txt').toString(),
    d12_1 = require('./12-1.js'),
    d12_2 = require('./12-2.js');


console.log( 'day 12 part 1 - result is: ' + d12_1(input) );
console.log( 'day 12 part 2 - result is: ' + d12_2(input) );
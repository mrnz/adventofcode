var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day14-input.txt').toString().split('\n'),
    d14_1 = require('./14-1.js'),
    d14_2 = require('./14-2.js');


console.log( 'day 14 part 1 - result is: ' + d14_1(input, 2503) );
console.log( 'day 14 part 2 - result is: ' + d14_2(input, 2503) );
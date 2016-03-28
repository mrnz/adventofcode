var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day15-input.txt').toString().split('\n'),
    d15_1 = require('./15-1.js');


console.log( 'day 15 part 1 - result is: ' + d15_1(input,100) );
console.log( 'day 15 part 2 - result is: ' + d15_1(input,100,500) );
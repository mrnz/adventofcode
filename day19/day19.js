var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day19-input.txt').toString().split('\n'),
    d19_1 = require('./19-1.js');


console.log( 'day 19 part 1 - result is: ' + d19_1(input,100) );
console.log( 'day 19 part 2 - result is: ' + d19_1(input,100,500) );
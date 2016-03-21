var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day17-input.txt').toString().split('\n'),
    d17_1 = require('./17-1.js'),
    d17_2 = require('./17-2.js');
    
console.log( 'day 17 part 1 - result is: ' + d17_1(input, 150) );
console.log( 'day 17 part 2 - result is: ' + d17_2(input, 150) );

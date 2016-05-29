var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day19-input.txt').toString().split('\n'),
    d19_1 = require('./19-1.js'),
    molecue = input[input.length-1],
    transformations = input.splice(0,input.length-2);

console.log( 'day 19 part 1 - result is: ' + d19_1(molecue,transformations) );

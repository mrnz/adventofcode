var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day1-input.txt').toString();

console.log( `day 1 part 1 - result is: ${require('./1-1.js')(input)}` );
console.log( `day 1 part 2 - result is: ${require('./1-2.js')(input)}` );
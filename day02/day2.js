var input = require('fs').readFileSync(__dirname+'/day2-input.txt').toString().split('\n');

console.log( `day 2 part 1 - result is: ${require('./2-1.js')(input)}` );
console.log( `day 2 part 2 - result is: ${require('./2-2.js')(input)}` );
/*--- Day 2: I Was Told There Would Be No Math ---

--- Part Two ---

The elves are also running low on ribbon. Ribbon is all the same width, so they only have to worry about the length they need to order, which they would again like to be exact.

The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present. Don't ask how they tie the bow, though; they'll never tell.

For example:

A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.

*/
const fs = require('fs');
var input = fs.readFileSync(__dirname+'/assets/day2-input.js').toString().split('\n');

(function() {

  var result = 0;
  input.forEach(function(line, index) {
    
    var arr = line.split('x');

    arr.forEach(function(dimeter, ind) { 
      arr[ind] = parseInt(dimeter);
    });

    arr.sort(function(a,b) {
      return a - b;
    });

    result += 2*arr[0]*arr[1] + 2*arr[1]*arr[2] + 2*arr[2]*arr[0] + arr[0]*arr[1];

  });

  console.log('Result: ' + result)

})();
/*

--- Part Two ---

The elves are also running low on ribbon. Ribbon is all the same width, so they only have to worry about the length they need to order, which they would again like to be exact.

The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present. Don't ask how they tie the bow, though; they'll never tell.

For example:

A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.
How many total feet of ribbon should they order?

Your puzzle answer was 3842356.
*/



(function() {

  var result = 0;
  input.forEach(function(line, index) {
    
    var arr = line.split('x');

    arr.forEach(function(dimeter, ind) { 
      arr[ind] = parseInt(dimeter);
    });

    arr.sort(function(a,b) {
      return a - b;
    });

    
    result += 2*arr[0] + 2*arr[1] + (arr[0]*arr[1]*arr[2]);

  });

  console.log('Result: ' + result)

})();

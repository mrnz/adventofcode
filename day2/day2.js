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

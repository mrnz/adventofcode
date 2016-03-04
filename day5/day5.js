
const fs = require('fs');
var input = fs.readFileSync(__dirname+'/day5-input.txt').toString().split('\n');


(function(input) {
  
  var result, test1, test2, test3, startTime;

  result = 0; 
  test1 = /[aeiou].*[aeiou].*[aeiou]/;
  test2 = /.*([a-z])\1{1}/;
  test3 = /^((?!ab|cd|pq|xy).)*$/;
  
  input.forEach(function(string, index) {
    
    if( test1.test(string) && test2.test(string) && test3.test(string) ){
      result++;
    }
      
  });
  
  console.log("Result is: " + result );

})(input);


(function(input) {
  
  var result, test1, test2, test3, startTime;

  result = 0; 
  test1 = /\w*(\w{2})\w*\1/;
  test2 = /(\w)\w\1/;
  
  
  input.forEach(function(string, index) {
    
    if( test1.test(string) && test2.test(string) ){
      result++;
    }
      
  });
  
  console.log("Result is: " + result );

})(input);
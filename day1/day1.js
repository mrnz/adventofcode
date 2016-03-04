

const fs = require('fs');
var input = fs.readFileSync(__dirname+'/day1-input.txt').toString();
var lines = input.split('\n');

(function(d) {
  
  var i = 0
  var result = 0;
  var firstInBasement = false;

  while( i < input.length ){
    
    if(input[i] === '('){
      result++;
    }else{
      result--;
    }

    if(result<0 && firstInBasement === false){
      firstInBasement = i + 1;
    }

    i++;
  }
  
  console.log('Result: ' + result )
  console.log("Santa entered first time to the basement in " + firstInBasement + " step" );

})();

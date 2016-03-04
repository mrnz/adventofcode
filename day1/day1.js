

var input = require('./assets/day1-input');
var timer = require("./helpers/timer.js");

(function(d) {
  
  var i = 0
  var result = 0;
  var firstInBasement = false;
  
  timer.start();

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
  
  console.log('Result: ' + result + ' Time: ' + timer.stop() + ' sec')
  console.log("Santa entered first time to the basement in " + firstInBasement + " step" );

})();

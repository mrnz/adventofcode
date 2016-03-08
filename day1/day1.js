

const fs = require('fs');
var input = fs.readFileSync(__dirname+'/day1-input.txt').toString();

module.exports = function(data) {

  
  var i = 0
  var result = 0;
  var firstInBasement = false;

  while( i < data.length ){
    
    if(data[i] === '('){
      result++;
    }else{
      result--;
    }

    if(result<0 && firstInBasement === false){
      firstInBasement = i + 1;
    }

    i++;
  }
  
  // console.log('Result: ' + result )
  // console.log("Santa entered first time to the basement in " + firstInBasement + " step" );
  return [result,firstInBasement];
};

'use strict';
module.exports = data => {

  var result = 0, firstInBasement = false;

  for( let i = 0; i < data.length; i++ ){
    
    data[i] === '(' ? result++ : result--;

    if( result < 0 && !firstInBasement ){
      firstInBasement = i + 1;
    }
  }
  return firstInBasement;
  
};
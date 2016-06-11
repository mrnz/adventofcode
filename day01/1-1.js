'use strict';
module.exports = data => {
  
  var result = 0;

  for( let i = 0; i < data.length; i++ ){
    data[i] === '(' ? result++ : result--;
  }
  
  return result;
  
};
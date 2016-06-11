'use strict';
module.exports = function(row, column, initialValue) {
  
  var maxR = 1,
      val = initialValue,
      pos = {r:1,c:1},
      nextVal, 
      nextCoordinates;
  
  nextVal = prev => {
    return prev * 252533 % 33554393;
  };
  
  nextCoordinates = prev => {
    if ( prev.r === 1 ){
      prev.r = ++maxR;
      prev.c = 1;
    }else{
      --prev.r;
      ++prev.c;
    }
    return prev;
  };
  
  while( !(pos.r === row && pos.c === column ) ){
    pos = nextCoordinates(pos);
    val = nextVal(val);
  };

  return val;
  
};
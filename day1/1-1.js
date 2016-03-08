module.exports = function(data) {
  
  var i = 0,
      result = 0;

  while( i < data.length ){
    
    if(data[i] === '('){
      result++;
    }else if( data[i] === ')' ){
      result--;
    };

    i++;
  }
  
  return result;
  
};
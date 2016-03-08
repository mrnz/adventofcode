module.exports = function(data) {

  var i = 0,
      result = 0,
      firstInBasement = false;

  while( i < data.length ){
    
    if(data[i] === '('){
      result++;
    }else if( data[i] === ')' ){
      result--;
    };

    if(result<0 && firstInBasement === false){
      firstInBasement = i + 1;
    }

    i++;
  }
  
  return firstInBasement;
};
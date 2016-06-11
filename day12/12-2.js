module.exports = function(data) {
  
  var result = 0,
      data = JSON.parse(data);
  
  var iterate = function(obj, label) {

    if(!Array.isArray(obj)){
      for(var i in obj) {
        if(obj.hasOwnProperty(i)){
          if(obj[i] === 'red'){
            return null;
          }

        }
      } 
    }
    for(var i in obj) {
      if(obj.hasOwnProperty(i)){
        if( typeof obj[i] === 'object' ){
          iterate(obj[i]) 
        }else if(typeof obj[i] ===  'number'){
          result += obj[i];
        }

      }
    }
    return null;
  };

  iterate(data);

  return result;
  
};
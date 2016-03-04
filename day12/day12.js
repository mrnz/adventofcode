const fs = require('fs');
var input = fs.readFileSync(__dirname+'/day12-input.txt').toString();

(function(data) {
  
  console.time("first");
  var numbers = data.match(/-\d+|\d+/g),
      result = 0;
  
  numbers.forEach(function(number) { 
    result += parseInt(number);
  });
  console.timeEnd("first");
  console.log(result);

})(input);




(function(data) {
  

  console.time("second");
  
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

  console.timeEnd("second");
  console.log(result)
  
})(input);
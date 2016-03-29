module.exports = function(input, repetitionNumber, limit) {
  
  var presents = [];

  for (var  e = 1; e < input / repetitionNumber; e++) {
    
    var visits = 0;

    for (var i = e; i < input / repetitionNumber; i = i + e) {
      
      if(limit){
        
        if (visits < limit) {
          
          if (!presents[i]){
            presents[i] = (repetitionNumber+1);
          }

          presents[i] = presents[i] + e * (repetitionNumber+1);
          visits = visits + 1;

        };

      }else{

        if (!presents[i]){
          presents[i] = repetitionNumber;
        };

        presents[i] = presents[i] + e * repetitionNumber;

      }

    }
  }

  return presents.reduce(function(min, current, index){
    return (min === 0 && current >= input) ? min = index : min;
  },0);
  
};
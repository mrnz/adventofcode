module.exports = function(input, numberOfLoops) {

  var string = input;
  
  for (var i = 0; i < numberOfLoops; i++) {

    var stringLength = string.length,
        memo = '';

    for (var j = 0; j < stringLength; ) {

      var factor = 1;
      
      while(string[j] === string[j+1]){
        ++j;
        ++factor;
      };

      memo += factor+''+string[j]
      j++;

    };

    string = memo;

  };

  return string.length;

};

 
module.exports = function(string, numberOfLoops) {

  var i, j, stringLength, memo, factor; 

  for ( i = 0; i < numberOfLoops; i++) {

    stringLength = string.length;
    memo = '';

    for ( j = 0; j < stringLength; ) {

      factor = 1;
      
      while(string[j] === string[j+1]){
        ++j;
        ++factor;
      }

      memo += factor+''+string[j]
      j++;

    }

    string = memo;

  }

  return string.length;

};

 
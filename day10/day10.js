(function(input) {

  var string = input;
  
  for (var i = 0; i < 50; i++) {

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

  console.log(string.length)

})("3113322113");

 
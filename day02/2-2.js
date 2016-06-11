module.exports = function(input) {

  var result = 0;
  
  input.forEach(function(line) {

    var arr = line.split('x').sort((a,b) => {
      return a - b;
    });
    
    result += 2*arr[0] + 2*arr[1] + (arr[0]*arr[1]*arr[2]);

  });

  return result;

};

module.exports = input => {

  var result = 0;

  input.forEach( line => {
    
    var arr = line.split('x').sort((a,b) => {
      return a - b;
    });

    result += 2*arr[0]*arr[1] + 2*arr[1]*arr[2] + 2*arr[2]*arr[0] + arr[0]*arr[1];

  });

  return result;

};

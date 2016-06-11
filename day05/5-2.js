module.exports = input => {
  
  var result, test1, test2, test3, startTime;

  result = 0; 
  test1 = /\w*(\w{2})\w*\1/;
  test2 = /(\w)\w\1/;
  
  
  input.forEach( (string, index) => {
    
    test1.test(string) && test2.test(string) && result++;
      
  });
  
  return result;

}
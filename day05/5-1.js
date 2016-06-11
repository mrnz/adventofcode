module.exports = input => {
  var result, test1, test2, test3, startTime;

  result = 0;
  test1 = /[aeiou].*[aeiou].*[aeiou]/;
  test2 = /.*([a-z])\1{1}/;
  test3 = /^((?!ab|cd|pq|xy).)*$/;
  
  input.forEach( (string, index) => {
    
    test1.test(string) && test2.test(string) && test3.test(string) && result++;
      
  });

  return result;
};
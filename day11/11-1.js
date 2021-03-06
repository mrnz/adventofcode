module.exports = function(input) {

  var alphabet = 'abcdefghjkmnpqrstuvwxyz',
      fullalphabet = 'abcdefghijklmnopqrstuvwxyz',
      increment, isThisLastLetter, returnNextLetter, isInAlphabeticOrderThereLetters, checkIfStringIsNice, prepareString,
      res = input; 
  
  isInAlphabeticOrderThereLetters = function(stringIn) {

    for (var i = 0; i < stringIn.length - 2; i++) {
      if( alphabet.indexOf( stringIn[i] + stringIn[i+1] + stringIn[i+2] ) > -1 ){
        return true;
      }
    };
    return false;
  };

  isThisLastLetter = function (letter) {
    return alphabet.indexOf(letter) === alphabet.length - 1 ? true : false;
  };
    
  returnNextLetter = function (letter) {
    var next, idx;
    if( isThisLastLetter( letter ) ){
      next = alphabet[0];
    }else{
      if( alphabet.indexOf(letter) === -1 ){
        idx = fullalphabet.indexOf(letter) + 1;
        next = fullalphabet[idx];
      }else{
        idx = alphabet.indexOf(letter) + 1; 
        next = alphabet[idx];
      }
    }
    return next;    
  };
  
  checkIfStringIsNice = function(string) { 

    var condition1 = isInAlphabeticOrderThereLetters(string),
        condition2 = ! /[i,o,l]/.test(string),
        condition3 = /([a-z]*[a-z])\1.*?([a-z]*[a-z])\2/.test(string),
        lastTest, indx, checkOverlaping;

        checkOverlaping = function(letter, string) {
          indx = string.indexOf(letter+letter);
          if(string[indx+2] === letter)return true;
          return false;
        };

    if(  condition1 && condition2 && condition3 ){
      
      lastTest = string.match(/([a-z]*[a-z])\1.*?([a-z]*[a-z])\2/);
      if(lastTest[1] === lastTest[2])return false;           
      if(checkOverlaping(lastTest[1][0], string))return false;
      if(checkOverlaping(lastTest[2][0], string))return false;
      return true;

    }else{
      return false;         
    };

  };

  increment = function(stringIn,position){
    
    var last = isThisLastLetter(stringIn[position]),
        next = returnNextLetter( stringIn[position] ),
        stringOut = stringIn.substr(0, position) + next + stringIn.substr(position + 1);

    if(last){
      return increment(stringOut, position-1);
    }

    return stringOut;
  };
  
  prepareString = function(sIn) {
    
    var test, index, nextString, i;

    test = sIn.match(/[i,o,l]/);

    if(test !== null ){

      index = test.index;
      nextString = sIn.slice(0,index) + fullalphabet[ fullalphabet.indexOf( test[0] ) + 1]; 

      for ( i = index + 1; i < sIn.length; i++) {
        nextString+=alphabet[0];
      };
      
      return nextString;
      
    }else{
      return sIn;
    }
  }

  res = prepareString(res);
  res = increment(res, res.length-1);
  while(!checkIfStringIsNice(res)){
    res = increment(res, res.length-1);
  };

  return res;

}

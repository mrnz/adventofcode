var md5 = require("./../node_modules/md5/md5.js");

module.exports = function(firstZeros, prefix) {

  var result, 
      n, 
      patern = '0000000000000'.slice(0,firstZeros);

  result = false;
  n = 0;
    
  while(result === false){

    var hash = md5( prefix + n.toString() ).toString();

    if(hash.slice(0,firstZeros) === patern){
      result = n;
    };

    n++;
  };
  
  return result;

};

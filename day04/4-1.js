'use strict';
var md5 = require("./../node_modules/md5/md5.js");

module.exports = function(firstZeros, prefix) {

  var result = false, 
      patern = '0'.repeat(firstZeros);
    
  for( let n = 0; !result; n++){
    
    let hash = md5( prefix + n ).toString().slice(0,firstZeros);

    if( hash === patern)result = n;

  };
  
  return result;

};

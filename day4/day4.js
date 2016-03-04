
var prefix = 'yzbqklnj';
var CryptoJS = require("./../helpers/md5.js");
var md5 = CryptoJS.MD5;
var input = prefix;

(function() {

  console.time('time: ');
  var result, n;

  result = false;
  n = 0;
  
  
  while(result === false){

    var hash = md5( prefix + n.toString() ).toString();

    if(hash.slice(0,5) === '00000'){
      result = n;
    } 

    if(n%10000 === 0){
      console.log(n)
    }

    n++;
  } 
  console.log('Result: ' + result);
  console.timeEnd('time: ') 
  
})();



(function() {

  console.time('time: ');
  var result, n;

  result = false;
  n = 0;
  
  
  while(result === false){

    var hash = md5( prefix + n.toString() ).toString();

    if(hash.slice(0,6) === '000000'){
      result = n;
    } 

    if(n%10000 === 0){
      console.log(n)
    }

    n++;
  } 
  console.log('Result: ' + result);
  console.timeEnd('time: ') 
  
})();
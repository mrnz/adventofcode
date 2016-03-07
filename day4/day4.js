
var prefix = 'yzbqklnj';
var md5 = require("./../node_modules/md5/md5.js");

var findHash = function(firstZeros) {

  console.time('time: ');

  var result, n, patern = '0000000000000'.slice(0,firstZeros);

  result = false;
  n = 0;
    
  while(result === false){

    var hash = md5( prefix + n.toString() ).toString();

    if(hash.slice(0,firstZeros) === patern){
      result = n;
    } 

    if(n%10000 === 0){
      console.log(n)
    }

    n++;
  } 
  console.log('Result: ' + result);
  console.timeEnd('time: ') 
  
};

findHash(5);
findHash(6);


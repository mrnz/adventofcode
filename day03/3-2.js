'use strict';
module.exports = function(input) { 

  var l = input.length,
      temp, i,
      map = ['0x0'],
      pos = {
        actualPositionS : [0,0],
        actualPositionR : [0,0]
      };
  
  for (i = 0; i <= l -1; i++) {

    let next, step = input[i];
    let varName = i%2 === 1 ? "actualPositionR" : "actualPositionS";

    switch (step){
      case '^':
        pos[varName][1] += 1;
        break;
      case 'v': 
        pos[varName][1] -= 1;
        break;
      case '>': 
        pos[varName][0] += 1;
        break;
      case '<': 
        pos[varName][0] -= 1;
        break;        
    }

    temp = pos[varName][0] + 'x' +  pos[varName][1];
    map.indexOf(temp) === -1 && map.push(temp);

  };

  return map.length;

};
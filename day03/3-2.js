module.exports = function(input) { 

  var l = input.length,
      temp,
      map = ['0x0'],
      pos = {
        actualPositionS : [0,0],
        actualPositionR : [0,0]
      };
  
  for (var i = 0; i <= l -1; i++) {

    var next,
        step =  input[i],
        varName = 'actualPositionS';

    if(i%2 === 1){
      varName = "actualPositionR";
    }

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

    if(map.indexOf(temp) === -1){
      map.push(temp); 
    }
  
  };

  return map.length;

};
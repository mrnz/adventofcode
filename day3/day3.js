const fs = require('fs');
var input = fs.readFileSync(__dirname+'/day3-input.txt').toString();

(function() { 

  var l = input.length;
  console.log(l)
  var map = ['0x0'];
  var actualPosition = [0,0];
  var temp; 
  for (var i = 0; i <= l -1; i++) {

    var step =  input[i];

    var next; 
    switch (step){
      case '^':
        actualPosition[1] += 1;
        break;
      case 'v': 
        actualPosition[1] -= 1;
        break;
      case '>': 
        actualPosition[0] += 1;
        break;
      case '<': 
        actualPosition[0] -= 1;
        break;        
    }
    temp = actualPosition[0] + 'x' +  actualPosition[1];
    if(map.indexOf(temp) === -1){
      map.push(temp); 
    }

      
  
  };
  console.log('Result: ' + map.length );
})();


(function() { 

  var l = input.length;
  var map = ['0x0'];
  var pos = {
    actualPositionS : [0,0],
    actualPositionR : [0,0]
  };
  var temp; 
  for (var i = 0; i <= l -1; i++) {

    var step =  input[i];
    var next;
    var varName = 'actualPositionS';

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
  console.log('Result: ' + map.length );
})()
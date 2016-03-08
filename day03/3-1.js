module.exports = function(input) { 

  var l = input.length,
      map = ['0x0'],
      actualPosition = [0,0],
      temp;

  for (var i = 0; i <= l -1; i++) {

    var next,
        step = input[i];
         

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

  return map.length;

};
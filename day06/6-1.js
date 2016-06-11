module.exports = function(data) { 

  var result = 0; 
  var grid = Array.apply(null, {length: 1000}).map(Number.call, function(){
    return  Array.apply(null, {length: 1000}).map(Number.call, function(){return false;})
  });
 
  data.forEach(function(line, lineIndex) {

    //7th character in line toggle == ' ', turn on == 'n', turn off == 'f'
    var command = line[6];
    var action; 
    var patern = /\d+,\d+/g;
    var coordinats = line.match(patern);
    coordinats = {
      x1: coordinats[0].split(',')[0],
      y1: coordinats[0].split(',')[1],
      x2: coordinats[1].split(',')[0],
      y2: coordinats[1].split(',')[1]
    };

    switch(command){
      case ' ': //toggle
        action = val => !val;
        break; 
      case 'n': //turn on
        action = val => true;
        break;            
      case 'f': //turn off
        action = val => false;
        break;            
    };

    for(;coordinats.x1 <= coordinats.x2; coordinats.x1++){
      var Y = coordinats.y1;
      for(;Y <= coordinats.y2; Y++){
        grid[coordinats.x1][Y] = action(grid[coordinats.x1][Y]);
      } 
    }

  });

  grid.forEach(function(col, colIndex) {
    
    col.forEach(function(row, rowIndex) {
      if(row)result++;
    });

  });

  return result;

}; 

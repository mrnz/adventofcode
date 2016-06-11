'use strict';
module.exports = function(data) { 

  var result = 0, action;
  var grid = Array.apply(null, {length: 1000}).map(Number.call, function(){
    return  Array.apply(null, {length: 1000}).map(a=>0)
  });
  
  data.forEach( (line, lineIndex) => {

    //7th character in line toggle == ' ', turn on == 'n', turn off == 'f'
    var command = line[6],
        coordinats = line.match(/\d+,\d+/g);

    coordinats = {
      x1: coordinats[0].split(',')[0],
      y1: coordinats[0].split(',')[1],
      x2: coordinats[1].split(',')[0],
      y2: coordinats[1].split(',')[1]
    };

    switch(command){
      case ' ': //toggle
        action = val => val+2;
        break; 
      case 'n': //turn on
        action = val => val+1;
        break;            
      case 'f': //turn off
        action = val => val === 0 ? 0 : val-1;
        break;            
    };

    for(;coordinats.x1 <= coordinats.x2; coordinats.x1++){

      let Y = coordinats.y1;
      for(;Y <= coordinats.y2; Y++){
        grid[coordinats.x1][Y] = action(grid[coordinats.x1][Y]);
      } 
    
    }

  });

  grid.forEach( (col, colIndex) => {
    
    col.forEach( (row, rowIndex) => {
      result += row;
    });

  });

  return result;

};
/*--- Day 6: Probably a Fire Hazard ---

Because your neighbors keep defeating you in the holiday house decorating contest year after year, 
you've decided to deploy one million lights in a 1000x1000 grid.

Furthermore, because you've been especially nice this year, 
Santa has mailed you instructions on how to display the ideal lighting configuration.

Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are at 0,0, 0,999, 999,999, and 999,0. 
The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs. 
Each coordinate pair represents opposite corners of a rectangle, inclusive; 
a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square. The lights all start turned off.

To defeat your neighbors this year, all you have to do is set up your lights by doing the instructions Santa sent you in order.

For example:

turn on 0,0 through 999,999 would turn on (or leave on) every light.
toggle 0,0 through 999,0 would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.
turn off 499,499 through 500,500 would turn off (or leave off) the middle four lights.
After following the instructions, how many lights are lit?
*/

var input = require('./assets/day6-input');

(function(data) { 

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
        action = function(val) { return !val }
        break; 
      case 'n': //turn on
        action = function(val) { return true }
        break;            
      case 'f': //turn off
        action = function(val) { return false }
        break;            
    };

    for(;coordinats.x1-1 < coordinats.x2; coordinats.x1++){
      var Y = coordinats.y1-1;
      for(;Y < coordinats.y2; Y++){
        grid[coordinats.x1][Y] = action(grid[coordinats.x1][Y]);
      } 
    }

  });

  grid.forEach(function(col, colIndex) {
    
    col.forEach(function(row, rowIndex) {
      if(row)result++;
    });

  })


  console.log('Result: ' + result);

})(input); 


/*
--- Part Two ---

You just finish implementing your winning light pattern when you realize you mistranslated Santa's message from Ancient Nordic Elvish.

The light grid you bought actually has individual brightness controls; each light can have a brightness of zero or more. The lights all start at zero.

The phrase turn on actually means that you should increase the brightness of those lights by 1.

The phrase turn off actually means that you should decrease the brightness of those lights by 1, to a minimum of zero.

The phrase toggle actually means that you should increase the brightness of those lights by 2.

What is the total brightness of all lights combined after following Santa's instructions?

For example:

turn on 0,0 through 0,0 would increase the total brightness by 1.
toggle 0,0 through 999,999 would increase the total brightness by 2000000.
*/

(function(data) { 

  var result = 0;
  var grid = Array.apply(null, {length: 1000}).map(Number.call, function(){
    return  Array.apply(null, {length: 1000}).map(Number.call, function(){return 0;})
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
        action = function(val) { return val+2 }
        break; 
      case 'n': //turn on
        action = function(val) { return val+1 }
        break;            
      case 'f': //turn off
        action = function(val) { return (val === 0 ? 0 : val-1) }
        break;            
    };

    for(;coordinats.x1-1 < coordinats.x2; coordinats.x1++){
      var Y = coordinats.y1-1;
      for(;Y < coordinats.y2; Y++){
        grid[coordinats.x1][Y] = action(grid[coordinats.x1][Y]);
      } 
    }

  });

  grid.forEach(function(col, colIndex) {
    
    col.forEach(function(row, rowIndex) {
      result += row
    });

  })


  console.log('Result: ' + result);

})(input); 
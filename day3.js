/*--- Day 3: Perfectly Spherical Houses in a Vacuum ---

Santa is delivering presents to an infinite two-dimensional grid of houses.

He begins by delivering a present to the house at his starting location, 
and then an elf at the North Pole calls him via radio and tells him where to move next. 
Moves are always exactly one house to the north (^), south (v), east (>), or west (<). 
After each move, he delivers another present to the house at his new location.

However, the elf back at the north pole has had a little too much eggnog, 
and so his directions are a little off, and Santa ends up visiting some houses more than once. 
How many houses receive at least one present?

For example:

> delivers presents to 2 houses: one at the starting location, and one to the east.
^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.
*/

var input = require('./assets/day3-input');

(function() { 

  var l = input.length;
  var map = ['0x0'];
  var actualPosition = [0,0];
  var temp; 
  for (var i = 0; i < l -1; i++) {

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




/*-- Part Two ---

The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), 
then take turns moving based on instructions from the elf, 
who is eggnoggedly reading from the same script as the previous year.

This year, how many houses receive at least one present?

For example:

^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.
*/

(function() { 

  var l = input.length;
  var map = ['0x0'];
  var pos = {
    actualPositionS : [0,0],
    actualPositionR : [0,0]
  };
  var temp; 
  for (var i = 0; i < l -1; i++) {

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
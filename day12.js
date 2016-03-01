/*
--- Day 12: JSAbacusFramework.io ---

Santa's Accounting-Elves need help balancing the books after a recent order. Unfortunately, their accounting software uses a peculiar storage format. That's where you come in.

They have a JSON document which contains a variety of things: arrays ([1,2,3]), objects ({"a":1, "b":2}), numbers, and strings. Your first job is to simply find all of the numbers throughout the document and add them together.

For example:

[1,2,3] and {"a":2,"b":4} both have a sum of 6.
[[[3]]] and {"a":{"b":4},"c":-1} both have a sum of 3.
{"a":[-1,1]} and [-1,{"a":1}] both have a sum of 0.
[] and {} both have a sum of 0.
You will not encounter any strings containing numbers.

What is the sum of all numbers in the document?
*/

const fs = require('fs');
var input = fs.readFileSync(__dirname+'/assets/day12-input.js').toString();

(function(data) {
  
  console.time("first");
  var numbers = data.match(/-\d+|\d+/g),
      result = 0;
  
  numbers.forEach(function(number) { 
    result += parseInt(number);
  });
  console.timeEnd("first");
  console.log(result);

})(input);

/*
--- Part Two ---

Uh oh - the Accounting-Elves have realized that they double-counted everything red.

Ignore any object (and all of its children) which has any property with the value "red". Do this only for objects ({...}), not arrays ([...]).

[1,2,3] still has a sum of 6.
[1,{"c":"red","b":2},3] now has a sum of 4, because the middle object is ignored.
{"d":"red","e":[1,2,3,4],"f":5} now has a sum of 0, because the entire structure is ignored.
[1,"red",5] has a sum of 6, because "red" in an array has no effect.
Although it hasn't changed, you can still get your puzzle input.

*/


var input = require('./assets/day12-input.js');
(function(data) {
  
  console.time("second");

  var result = 0;

  var iterate = function(obj, label) {

    if(!Array.isArray(obj)){
      for(var i in obj) {
        if(obj.hasOwnProperty(i)){
          if(obj[i] === 'red'){
            return null;
          }

        }
      } 
    }
    for(var i in obj) {
      if(obj.hasOwnProperty(i)){
        if( typeof obj[i] === 'object' ){
          iterate(obj[i]) 
        }else if(typeof obj[i] ===  'number'){
          result += obj[i];
        }

      }
    }
    return null;
  };
  iterate(data);

  console.timeEnd("second");
  console.log(result)
  
})(input);
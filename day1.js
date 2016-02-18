/*--- Day 1: Not Quite Lisp ---

Santa is trying to deliver presents in a large apartment building, 
but he can't find the right floor - the directions he got are a little confusing. 
He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

For example:

(()) and ()() both result in floor 0.
((( and (()(()( both result in floor 3.
))((((( also results in floor 3.
()) and ))( both result in floor -1 (the first basement level).
))) and )())()) both result in floor -3.

To what floor do the instructions take Santa?

*/

var input = require('./assets/day1-input');
var timer = require("./helpers/timer.js");

(function(d) {
	
	var i = 0
	var result = 0;
	var firstInBasement = false;
	
	timer.start();

	while( i < input.length ){
		
		if(input[i] === '('){
			result++;
		}else{
			result--;
		}

		if(result<0 && firstInBasement === false){
			firstInBasement = i + 1;
		}

		i++;
	}
	
	console.log('Result: ' + result + ' Time: ' + timer.stop() + ' sec')
	console.log("Santa entered first time to the basement in " + firstInBasement + " step" );

})()

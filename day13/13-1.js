
var Combinatorics = require('js-combinatorics');

module.exports = function(input) { 
	var arr = [];
	var people = [];
	var result = {};
	var allResults = [];
	
	input.forEach(function(d,i) {
		
		var names = d.match(/[A-Z][a-z]*\b/g),
				value = parseInt(d.match(/\d.\b/g)[0]),
				lose = /lose/.test(d);

		if(people.indexOf(names[0] ) === -1){
			people.push(names[0])
		}
		if(typeof result[ names[0] ] === 'undefined' ){
			result[ names[0] ] = {};
		}
		if(typeof result[ names[0] ][ names[1] ] === 'undefined' ){
			result[ names[0] ][ names[1] ] = lose ? value*-1 : value;
		}
	});

	Combinatorics.permutation(people).filter(function(combination){
	
		var thisResult = 0;
	
		for (var i = 0; i < combination.length; i++) {
			var prev, next;
			if(i===0){
				
				prev = result[ combination[i] ][ combination[combination.length-1] ];
				next = result[ combination[i] ][ combination[i+1] ];

			}else if(i===combination.length-1){
				
				prev = result[ combination[i] ][ combination[i-1] ];
				next = result[ combination[i] ][ combination[0] ];

			}else{
				prev = result[ combination[i] ][ combination[i-1] ];
				next = result[ combination[i] ][ combination[i+1] ];
			}
			thisResult += next;
			thisResult += prev;

		};
		
		allResults.push(thisResult);
	
	})
	return Math.max.apply(null, allResults);
};

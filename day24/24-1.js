'use strict';
var Combinatorics = require('js-combinatorics');
module.exports = function(input, groupsNr) {
	
	var input = input.map(Number),
			sum = input.reduce( (a,b) => a+b),
			weight = sum / groupsNr,
			results = [],
			n = 1;

	while(results.length === 0) {
		
		results = Combinatorics.combination(input, n)
			.filter( comb => comb.reduce( (prev, current ) => prev + current ) === weight )
			.map( a => a.reduce( ( prev, current ) => prev * current ) )
			.sort( (a,b) => a-b);
		n++;

	};

	return results[0];

};
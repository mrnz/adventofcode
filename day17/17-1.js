
var Combinatorics = require('js-combinatorics');

module.exports = function(input, target) { 
	return Combinatorics.power(input).filter(function(el){
		if(el.length){
			return el.reduce(function (prev, next, index) {
				return  parseInt(prev) +  parseInt(next);
			}) === target;
		}		
	}).length;
};

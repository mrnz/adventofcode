
var Combinatorics = require('js-combinatorics');

module.exports = function(input, target) { 
	var  result = [], minmalAmount, result2 = 0;
	
	Combinatorics.power(input).filter(function(el){
	
		var valueOfThisCombination, lengthOfThisCombination = 0;
		
		if(el.length){
			valueOfThisCombination = el.reduce(function (prev, next, index) {
				lengthOfThisCombination++;
				return  parseInt(prev) + parseInt(next);
			});
			if(valueOfThisCombination === target){
				result.push(lengthOfThisCombination);
				return lengthOfThisCombination;
			}
		};

	});

	minmalAmount = Math.min.apply(null, result);

	result.map( (val,index) => {
		if(val === minmalAmount)result2++;
	})
	return 	result2;
};

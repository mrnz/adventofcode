'use strict';
module.exports = function(row, column) {
	var maxR = 1,
			val = 20151125,
			pos = {
				r:1,
				c:1
			},
			nextVal, nextCoordinates;
	
	nextVal = function(prev) {
		return prev * 252533 % 33554393;
	};
	
	nextCoordinates = function(prev) {
		if ( prev.r === 1 ){
			prev.r = ++maxR;
			prev.c = 1;
		}else{
			prev.r -= 1;
			prev.c += 1;
		}
		return prev;
	};
	
	while( !(pos.r === row && pos.c === column ) ){
		pos = nextCoordinates(pos);
		val = nextVal(val);
	};

	return val;
	
};
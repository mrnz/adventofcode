'use strict';
module.exports = function(input, register, startA, startB) {
	var idx = 0,
			r = {
				a:0,
				b:0
			},
			register = typeof register === 'undefined' ? 'b' : register;
	if (typeof startA !== 'undefined') {r.a = startA;};
	if (typeof startB !== 'undefined') {r.b = startB;};
	
	while(idx >= 0 && input.length>idx){
		
		let temp = input[idx].split(' ');
		let command = temp[0];

		switch(command) {
	    case 'hlf':
	      r[temp[1]] /= 2;
	      idx += 1;
	      break;
	    case 'tpl':
	      r[temp[1]] *= 3;
	      idx += 1;
	      break;
	    case 'inc':
	      r[temp[1]] += 1;
	      idx += 1;
	      break;
	    case 'jmp':
	      idx += parseInt( temp[1] );
	      break;
	    case 'jie':
	    	idx += r[temp[1][0]]%2===0 ? parseInt( temp[2] ) : 1;
	      break;
	    case 'jio':
				idx += r[temp[1][0]]===1 ? parseInt( temp[2] ) : 1;
	      break;                
		}
	};
	return r[register];
}
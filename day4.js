/*--- Day 4: The Ideal Stocking Stuffer ---

Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the 
economically forward-thinking little girls and boys.

To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. 
The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. 
To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

For example:

If your secret key is abcdef, the answer is 609043, because the MD5 hash of 
abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.
If your secret key is pqrstuv, the lowest number it combines with 
to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....

Your puzzle input is "yzbqklnj"

*/


var prefix = 'yzbqklnj';
var crypto = require('crypto');
var timer = require("./helpers/timer.js");

(function() {

	var n, check;
	n = 0;

	timer.start();

	check  = function () {
		var hash, stringToTest;

		stringToTest = prefix + ( ++n );
		hash = crypto.createHash('md5').update(stringToTest).digest("hex");

		if( hash.substring(0,6) === '000000' ){

			console.log('Solution : ' + n + ' which creates hash: ' + hash + ' found in ' + timer.stop() + ' sec'	);

		}else{
			console.log(n)
			setTimeout(function() {
				check();
			});
		}
	};
	check()

})();








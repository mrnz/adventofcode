var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day16-input.txt').toString().split('\n'),
    d16_1 = require('./16-1.js'),
    d16_2 = require('./16-2.js');

var responseFromMachine = {
	 	children: 3,
		cats: 7,
		samoyeds: 2,
		pomeranians: 3,
		akitas: 0,
		vizslas: 0,
		goldfish: 5,
		trees: 3,
		cars: 2,
		perfumes: 1
};

console.log( 'day 16 part 1 - result is: ' + d16_1(input, responseFromMachine) );
console.log( 'day 16 part 2 - result is: ' + d16_2(input, responseFromMachine) );

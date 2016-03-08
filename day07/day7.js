
const fs = require('fs');
var input = fs.readFileSync(__dirname+'/day7-input.txt').toString().split('\n');


(function(data) { 

	data.forEach(function(line,lineIndex){
		console.log(line)
	});


})(input)
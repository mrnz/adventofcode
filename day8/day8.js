const fs = require('fs');
var input = fs.readFileSync(__dirname+'/day8-input.txt').toString();
var lines = input.split('\n');

(function(data) { 
		
	var total = 0;
	var string = 0;

	data.forEach(function(line) {
	    
	    total += line.length;
	    
	    // get rid of opening and cloasing quotes
	    line = line.slice(1, line.length-1);
	    
	    var regex = new RegExp('\\\\"', 'g');
	    line = line.replace(regex, '1');
	    
	    var regex = new RegExp('\\\\\\\\', 'g');
	    line = line.replace(regex, '1');
	    
	    var regex = new RegExp('\\\\x([a-f0-9]{2})', 'g');
	    line = line.replace(regex, '1');

	    string += line.length;
	});

	console.log(total - string);

})(lines);



(function(data) { 
		
	var encoded = 0;
	var total = 0;

	data.forEach(function(line) {
	    
	    total += line.length;
	    
	    // opening and cloasing quotes === 6
	    encoded += 6;
	    
	    // get rid of opening and cloasing quotes
	    line = line.slice(1, line.length-1);
	    
	    var regex = new RegExp('\\\\', 'g');
	    line = line.replace(regex, '99');
	    
	    var regex = new RegExp('\\"', 'g');
	    line = line.replace(regex, '99');

	    encoded += line.length;
	});

	console.log(encoded - total);

})(lines);

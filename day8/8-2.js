module.exports = function(data) { 
		
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

	return encoded - total;

};

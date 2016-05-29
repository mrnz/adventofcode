module.exports = function(molecule, transformations) {

	var inputRevers = new Map,
			result = 0;

	transformations.forEach(function(transformation) {
		var transformationArr = transformation.split(' => ');
	  inputRevers.set(transformationArr[1], transformationArr[0]);
	});

	while (molecule !== 'e') {
	  for (var item of inputRevers.entries() ) {
	    if ( molecule.indexOf(item[0]) > -1 ) {
	      molecule = molecule.replace(item[0], item[1])
	      result++;
	    }
	  }
	};

	return result;
};
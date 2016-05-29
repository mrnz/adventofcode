module.exports = function(molecule, transformations) {

	var result = new Set();

	transformations.forEach(transformation => {
	  var transformation = transformation.split(' => ');
	  var from = transformation[0];
	  var to = transformation[1];
	  var findRegex = new RegExp(from, 'g');
	  var replaceRegex = new RegExp(from);

	  var match;
	  while (match = findRegex.exec(molecule)) {
	    result.add(molecule.slice(0, match.index) + molecule.slice(match.index).replace(replaceRegex, to));
	  }
	});
	return result.size;
};
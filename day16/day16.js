var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day16-input.txt').toString(),
    lines = input.split('\n');

(function(d) { 
	lines.forEach(function(d) {

		var auntNr = d.match(/\d+/)[0];
		var json = JSON.parse( '{' + d.split(/Sue \d+: /)[1].replace(/[a-z]+/g, function(x){ return '"' + x + '"'}) + '}' );

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




		var resp = true; 
		for (var prop in json) {
			if (json.hasOwnProperty(prop)) {
		
					if(json[prop] !== responseFromMachine[prop]){
						resp = false;
					}
		
			}
		}
		if(resp){
			console.log(auntNr)
		}
				


	});
})();


(function(d) { 
	lines.forEach(function(d) {

		var auntNr = d.match(/\d+/)[0];
		var json = JSON.parse( '{' + d.split(/Sue \d+: /)[1].replace(/[a-z]+/g, function(x){ return '"' + x + '"'}) + '}' );

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




		var resp = true; 
		for (var prop in json) {
			if (json.hasOwnProperty(prop)) {
				
				if(prop === 'pomeranians' || prop === 'goldfish' ){
					if(json[prop] <= responseFromMachine[prop]){
						resp = false;
					}
				}else if( prop === 'cats' || prop === 'trees' ){
					if(json[prop] >= responseFromMachine[prop]){
						resp = false;
					}
				}else{
					if(json[prop] !== responseFromMachine[prop]){
						resp = false;	
					}
				}
			}
		}
		if(resp){
			console.log(d)
		}
				


	});
})();


/*In particular, the cats and trees readings indicates that there are greater than that many (due to the unpredictable nuclear decay of cat dander and tree pollen), 
while the pomeranians and goldfish readings indicate that there are fewer than that many (due to the modial interaction of magnetoreluctance).    */
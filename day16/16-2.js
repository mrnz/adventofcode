module.exports = function(lines, responseFromMachine) { 
	var result = 0;
	lines.forEach(function(d) {

		var auntNr = d.match(/\d+/)[0],
				json = JSON.parse( '{' + d.split(/Sue \d+: /)[1].replace(/[a-z]+/g, function(x){ return '"' + x + '"'}) + '}' ),
				resp = true; 

		for (var prop in json) {
			if (json.hasOwnProperty(prop)) {
				
				if(prop === 'pomeranians' || prop === 'goldfish' ){
					if(json[prop] > responseFromMachine[prop]){
						resp = false;
					}
				}else if( prop === 'cats' || prop === 'trees' ){
					if(json[prop] < responseFromMachine[prop]){
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
			result = parseInt(auntNr);
		}
	});
	return result;
};
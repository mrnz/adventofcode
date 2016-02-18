var startTime, endTime, api; 

api = {
	start: function(d) { 
		startTime = new Date();
	},
	stop: function(d) { 
		endTime = new Date();

		return (endTime - startTime) / 1000;
	},
}

module.exports = api;



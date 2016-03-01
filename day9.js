/*--- Day 9: All in a Single Night ---

Every year, Santa manages to deliver all of his presents in a single night.

This year, however, he has some new locations to visit; his elves have provided him the distances between every pair of locations. He can start and end at any two (different) locations he wants, but he must visit each location exactly once. What is the shortest distance he can travel to achieve this?

For example, given the following distances:

London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141
The possible routes are therefore:

Dublin -> London -> Belfast = 982
London -> Dublin -> Belfast = 605
London -> Belfast -> Dublin = 659
Dublin -> Belfast -> London = 659
Belfast -> Dublin -> London = 605
Belfast -> London -> Dublin = 982
The shortest of these is London -> Dublin -> Belfast = 605, and so the answer is 605 in this example.

What is the distance of the shortest route?*/


const fs = require('fs');
var input = fs.readFileSync(__dirname+'/assets/day9-input.js').toString();
var lines = input.split('\n');

(function(data) { 
	var arr = []
	var towns = [];
	data.forEach(function(line, index) {
		
		if(towns.indexOf(line.split(' ')[0]) < 0){
			towns.push(line.split(' ')[0])
		};
		if(towns.indexOf(line.split(' ')[2]) < 0){
			towns.push(line.split(' ')[2])
		};

		//arr[index] = [line.split(' ')[0], line.split(' ')[2], line.split(' ')[4]];

	});
	console.log(towns)
})(lines)
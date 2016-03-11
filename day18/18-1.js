module.exports = function(input, stepsNumber) { 

	var input = input,
			map,createMap, step, copyArr;
	
	copyArr = function(arr) {
		var newArr = [];
		arr.forEach(function(row,index) {
			newArr.push(arr[index].slice());
		});
		return newArr;
	};

	createMap = function(dataIn) {
		var temp = [];
		dataIn.forEach(function(line,indexLine){
			temp.push([]);
			for(var i = 0; i<line.length; i++){
				temp[indexLine].push(line[i]);
			};
		});	
		return temp;
	};

	step = function(dataIn) {

		var prevState = copyArr(dataIn);
		var newState = [];

		dataIn.forEach(function(row,idxRow){
			newState.push([])
			row.forEach(function(char,idxChar){

				var actualStatus = prevState[idxRow][idxChar] === '#' ? true : false;
				var neighbors = [];
				var procedure;

				procedure = function(neighbor) { 
					if(neighbor === '#'){
						neighbors.push(true);
					}
				}


				if(prevState[idxRow-1]){
					if(prevState[idxRow-1][idxChar-1]){
						procedure(prevState[idxRow-1][idxChar-1])
					}
					if(prevState[idxRow-1][idxChar]){
						procedure(prevState[idxRow-1][idxChar])
					}
					if(prevState[idxRow-1][idxChar+1]){
						procedure(prevState[idxRow-1][idxChar+1])
					}	
				}
				

				if(prevState[idxRow][idxChar-1]){
					procedure(prevState[idxRow][idxChar-1])
				}
				if(prevState[idxRow][idxChar+1]){
					procedure(prevState[idxRow][idxChar+1])
				}


				if(prevState[idxRow+1]){
					if(prevState[idxRow+1][idxChar-1]){
						procedure(prevState[idxRow+1][idxChar-1])
					}
					if(prevState[idxRow+1][idxChar]){
						procedure(prevState[idxRow+1][idxChar])
					}
					if(prevState[idxRow+1][idxChar+1]){
						procedure(prevState[idxRow+1][idxChar+1])
					}	
				}
				
				if(actualStatus){

					if(neighbors.length === 2 || neighbors.length === 3){
						newState[idxRow][idxChar] = '#';
					}else{
						newState[idxRow][idxChar] = '.';
					}
				}else{
					if(neighbors.length === 3){
						newState[idxRow][idxChar] = '#';
					}else{
						newState[idxRow][idxChar] = '.';
					}
				}

			});			
		})

		return newState;

	};

	var countLightsOn = function (arr) {
		var result = 0;
		arr.forEach(function(row,idxRow){
			row.forEach(function(char,idxChar){
				if(char==='#')result+=1;
			})
		})
		return result
	}

	map = createMap(input);
	var next = step(map);
	for(var k = 1; k < stepsNumber; k++){
		next = step(next);
	}

	return countLightsOn(next);
}
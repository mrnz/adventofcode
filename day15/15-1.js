module.exports = function(input,teaspoons, caloriesLimit) {

  var parseInput, pointMap, possibilities, generateMap, getScoreForThisPossibility, calcMaxScore;

  parseInput = function(line) {
    var temp, ingridientName, result = {};
    
    temp = line.split(':');
    ingridientName = temp[0];
    properties = temp[1].split(',');
    result.name = ingridientName;

    properties.forEach( property => {
      
      var property = property.trim().split(' ');
      propertyName = property[0];
      propertyValue = property[1];
      result[ propertyName ] = parseInt(propertyValue);

    });
    
    return result;

  };

  generateMap = function () {
    var res = [];
    for (var a = 1; a < teaspoons; a++){
      for (var b = 1; b < teaspoons; b++){
        for (var c = 1; c < teaspoons; c++){
          for (var d = 1; d < teaspoons; d++){
            if(a+b+c+d === teaspoons){
             res.push([a,b,c,d])
            }
          }    
        }    
      }    
    }
    return res;
  };

  getScoreForThisPossibility = function(possibility, map) {


    var res = {
      capacity:0,
      durability:0,
      flavor:0,
      texture:0,
      calories: 0
    },
    total = {}; 

    for (var i = 0; i < possibility.length; i++) {
      res.capacity += possibility[i] * pointMap[i].capacity ;
      res.durability += possibility[i] * pointMap[i].durability ;
      res.flavor += possibility[i] * pointMap[i].flavor ;
      res.texture += possibility[i] * pointMap[i].texture ;
      res.calories += possibility[i] * pointMap[i].calories ;
    };
  
    res.capacity = Math.max(0,res.capacity);
    res.durability = Math.max(0,res.durability);
    res.flavor = Math.max(0,res.flavor);
    res.texture = Math.max(0,res.texture);
    res.calories = Math.max(0,res.calories);

    total.score = res.capacity * res.durability * res.flavor * res.texture;
    total.calories = res.calories;

    return total;  
    
  };
  
  calcMaxScore = function (prevValue, currentPossibility, indexOfcurrentCurrentPossibility) {
    var res;
    res = getScoreForThisPossibility(currentPossibility, pointMap); 
    if( !isNaN(caloriesLimit) ){
      res.score = res.calories <= caloriesLimit ? res.score : 0; 
    }
    return prevValue > res.score ? prevValue : res.score;
  };

  pointMap = input.map(parseInput);
  propertiesNameArray = Object.keys(pointMap[0])
  possibilities = generateMap();

  return possibilities.reduce(calcMaxScore,{score:0});

};
var fs = require('fs'),
    input = fs.readFileSync(__dirname+'/day14-input.txt').toString(),
    lines = input.split('\n');

(function(data, afterTime) {
  
  var results = [];

  data.forEach(function(line) {
    
    var time = 0,
        distance = 0,
        phase = true,
        speed = parseInt(line.match(/\d+ km/g)),
        flyTime = parseInt(line.match(/\d+ se/g)[0]),
        restTime = parseInt(line.match(/\d+ se/g)[1]);

    while(time < afterTime){

      if(phase){

        if(time + flyTime > afterTime ){
           
           distance += (afterTime - time) * speed;
           time += afterTime - time;

        }else{
          
          distance += speed * flyTime 
          time += flyTime;  

        }
        
      }else{
        
        if(time + restTime > afterTime ){
          time += afterTime - time;
        }else{
          time += restTime; 
        }

      }

      phase = !phase;

    };

    results.push(distance);

  }); 
  
  console.log(results.sort(function(a,b) { return a<b; })[0]);

})(lines, 2503);



(function (data, totalTime) {
  
  // initialize result array with length equals reindeers number and starting points 0
  var results = Array.apply(null, Array(data.length)).map(function(){return 0;});
  
  for (var time = 1; time <= totalTime; time++) {  

    // initialize temp array with length equals reindeers number and starting distance 0
    var distancesInTimePoint = Array.apply(null, Array(data.length)).map(function(){return 0;});

    data.forEach(function(line, index) {
      
      var distance = 0,
          phase = true,
          memo = time,
          speed = parseInt(line.match(/\d+ km/g)),
          flyTime = parseInt(line.match(/\d+ se/g)[0]),
          restTime = parseInt(line.match(/\d+ se/g)[1]);

      (function calculatePosition () {

        if(memo === 0)return;

        if(phase){
          // fly phase
          if(memo > flyTime){
            distance+=speed*flyTime;
            memo-=flyTime;
          }else{
            distance+=speed*memo;
            memo-=memo;
          }

        }else{
          // rest phase
          if(memo > restTime){
            memo-=restTime;
          }else{
            memo-=memo;
          }

        }
        phase = !phase;
        calculatePosition();

      })();
      
      distancesInTimePoint[index] = distance;

    });
    
    // find indexes of the highest values at this time point
    resultsAtThisTimePoint = distancesInTimePoint.reduce(function(previousValue, currentValue, currentIndex) {
      return previousValue.concat(currentValue === Math.max.apply(Math, distancesInTimePoint) ? [currentIndex] : []);
    },[]);
    
    // distribute points to according to indexes
    resultsAtThisTimePoint.forEach(function(v,i) {
      results[v] += 1;
    });
    
  };

  // display the highest result 
  console.log(Math.max.apply(Math, results ) );

})(lines, 2503);
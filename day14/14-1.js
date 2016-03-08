module.exports = function(data, afterTime) {
  
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
  
  return results.sort(function(a,b) { return a<b; })[0];

}
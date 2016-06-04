var fs = require('fs'),
    Combinatorics = require('js-combinatorics');

module.exports = function(data, indicator) { 

  if( ! (indicator === 'shortest' || indicator === 'longest') ){
    return 'Error: indicator should be "longest" or "shortest"';
  };

  var distances = {}, towns = [], 
      result = indicator === 'longest' ? 0 : Infinity;
  
  data.forEach(function(line, index) {
  
    var t1 = line.split(' ')[0],
        t2 = line.split(' ')[2],
        dist = parseInt(line.split(' ')[4]);

    if(towns.indexOf( t1 ) < 0) towns.push( t1 );
    if(towns.indexOf( t2 ) < 0) towns.push( t2 );
  
    distances[t1] = !distances.hasOwnProperty( t1 ) ? {} : distances[t1];
    distances[t2] = !distances.hasOwnProperty( t2 ) ? {} : distances[t2];

    distances[t2][t1] = dist;
    distances[t1][t2] = dist;

  });
  
  Combinatorics
    .permutation(towns)
    .toArray()
    .map(function(posib, i) {
      
      var counter = 0; 
      
      for (var i = 1; i < posib.length; i++) {
        counter += distances[posib[i]][posib[i-1]];
      }
      if( indicator === 'longest' ){
        result = result>counter? result : counter
      }else if( indicator === 'shortest' ){
        result = result<counter? result : counter
      }
      

    });
  
    return result;
};
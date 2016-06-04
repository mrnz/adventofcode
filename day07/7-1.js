module.exports = function(data, toFind, overwriteChar, overwriteVal) { 

  var all = [], init, find, cache = [];

  init = (item) => {
    var temp = item.split(" -> "),
      target = temp[1],
      expresion = temp[0];
    
    cache[target] = NaN;
    all[target] = isNaN(expresion) ? expresion : parseInt(expresion);
  };

  find = (toFind) => {

    if(!isNaN(toFind)) return toFind;
    if(!isNaN(cache[toFind])) return cache[toFind];
    if(!isNaN(all[toFind])) { 
        cache[toFind] = all[toFind];
        return cache[toFind];
    }   
    var args = all[toFind].split(" ");
    if(args.length == 1) {
      cache[toFind] = find(args[0]);
      return cache[toFind];
    };

    if(args.length == 2) {
      var not = ~find(args[1]);
      not = (not<0) ? (65536+not) : not; 
      cache[toFind] = not;
      return cache[toFind];
    }
    if(args.length == 3) {
      if(args[1] == "AND") {
        var res = find(args[0], all, cache) & find(args[2], all, cache);
        cache[toFind] = res;
        return cache[toFind];
      }
      if(args[1] == "OR") {
        var res = find(args[0], all, cache) | find(args[2], all, cache);
        cache[toFind] = res;
        return cache[toFind];
      }
      if(args[1] == "RSHIFT") {
        var res = find(args[0], all, cache) >> find(args[2], all, cache);
        cache[toFind] = res;
        return cache[toFind];
      }
      if(args[1] == "LSHIFT") {
        var res = find(args[0], all, cache) << find(args[2], all, cache);
        cache[toFind] = res;
        return cache[toFind];
      }
    }

  };

  data.forEach( line => {
    init(line);
  });
  if( typeof overwriteChar !== 'undefined' ){
    all[overwriteChar] = overwriteVal;  
  }
  
  return find("a");
  
};
module.exports = function(data) { 
    
  var total = 0, string = 0; 

  data.forEach(function(line) {
    
    total += line.length;
    
    // get rid of opening and cloasing quotes
    line = line.slice(1, line.length-1);
    
    var regex = new RegExp('\\\\"', 'g');
    line = line.replace(regex, '1');
    
    var regex = new RegExp('\\\\\\\\', 'g');
    line = line.replace(regex, '1');
    
    var regex = new RegExp('\\\\x([a-f0-9]{2})', 'g');
    line = line.replace(regex, '1');

    string += line.length;
    
  });

  return total - string;

};

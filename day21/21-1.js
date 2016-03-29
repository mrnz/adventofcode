var Combinatorics = require('js-combinatorics');

module.exports = function(input, winOrLose) {

  var prepareInput, bossFromInput = {}, simulate, items, Player, Boss;

  items = {
    w:[[8,4,0],[10,5,0],[25,6,0],[40,7,0],[74,8,0]],
    a:[[0,0,0],[13,0,1],[31,0,2],[53,0,3],[75,0,4],[102,0,5]],
    r:[[0,0,0],[25,1,0],[50,2,0],[100,3,0],[20,0,1],[40,0,2],[80,0,3]]
  }
  
  Player = function() {
    this.hp = 100;
    this.damage = 0;
    this.armor = 0;
  };

  Boss = function() {
    this.hp = bossFromInput.hp;
    this.damage = bossFromInput.damage;
    this.armor = bossFromInput.armor;
  };

  prepareInput = function() {
    input.forEach( line => {
      line = line.split(': ');
      bossFromInput[line[0]] = parseInt(line[1]);
    }); 
  };
  

  simulate = function(player,boss) {
    
    var turn = true;

    while(player.hp > 0 && boss.hp > 0){

      if(turn){
        boss.hp -= Math.max( 1, (player.damage - boss.armor) );
      }else{
        player.hp -= Math.max( 1, (boss.damage - player.armor) );
      }

      turn = !turn;
    }

    return player.hp > boss.hp;

  };

  combo = function() {
    var result = Combinatorics.cartesianProduct(items.w, items.a, items.r, items.r).filter( n => {
      
      var player = new Player();

      if(n[2][0] !== 0){
        if(n[2][0] === n[3][0] ){
          return false; 
        } 
      };

      n.forEach( prep => {

        player.damage += prep[1];
        player.armor += prep[2];

      })
      return winOrLose ? simulate(player, new Boss()) : !simulate(player, new Boss());
      
      

    }).map( f => {
      return f.reduce( (sum , curr) => {  return sum + parseInt(curr[0]); },0);
    })    

    return winOrLose ? Math.min.apply(false, result) : Math.max.apply(false, result);

  }
  
  prepareInput();
  
  return combo();
  

};

var Combinatorics = require('js-combinatorics');

module.exports = function(bossStats) {

'use strict';

// var bossStats = {
//     hp: 51,
//     damageAmt: 9,
// }

// class Player {
//     constructor(initial, isWizard) {
//         this.history = [];
//         this.initial = initial;
//         this.isWizard = !!isWizard;

//         if (this.isWizard) {
//             this.spells = [
//                 {
//                     cost: 53,
//                     effect: (m, o) => o.damage(4),
//                 },
//                 {
//                     cost: 73,
//                     effect: (m, o) => { o.damage(2); m.hp +=2;},
//                 },
//                 {
//                     cost: 113,
//                     start:  (m, o) => m.armor += 7,
//                     effect: (m, o) => {},
//                     end:    (m, o) => m.armor -= 7,
//                     duration: 6,
//                 },
//                 {
//                     cost: 173,
//                     effect: (m, o) => o.damage(3),
//                     duration: 6,
//                 },
//                 {
//                     cost: 229,
//                     effect: (m, o) => m.mana += 101,
//                     duration: 5,
//                 },
//             ];
//         }

//         this.start();
//     }

//     attack(opponent, spellIdx) {
//         if (!this.isWizard) {
//             opponent.damage(this.damageAmt);
//         } else {
//             this.history.push(spellIdx);
//             var spell = this.spells[spellIdx];
//             this.spent += spell.cost;
//             this.mana -= spell.cost;

//             if (spell.duration) {
//                 var newSpell = {
//                     idx: spellIdx,
//                     effect: spell.effect,
//                     duration: spell.duration,
//                 };
//                 if (spell.start) {
//                     spell.start(this, opponent);
//                 }
//                 if (spell.end) {
//                     newSpell.end = spell.end;
//                 }
//                 this.activeSpells.push(newSpell);
//             } else {
//                 spell.effect(this, opponent);
//             }
//         }
//     }

//     damage(n) {
//         this.hp -= Math.max(1, n - this.armor);
//     }

//     duplicate() {
//         var newPlayer = new Player(this.initial, this.isWizard);
//         newPlayer.hp = this.hp;
//         newPlayer.spent = this.spent;
//         newPlayer.armor = this.armor;
//         newPlayer.turn = this.turn;
//         for (var i = 0; i < this.activeSpells.length; i++) {
//             newPlayer.activeSpells.push(Object.assign({}, this.activeSpells[i]));
//         }
//         for (var i = 0; i < this.history.length; i++) {
//             newPlayer.history.push(this.history[i]);
//         }

//         if (this.isWizard)
//             newPlayer.mana = this.mana;
//         else
//             newPlayer.damageAmt = this.damageAmt;

//         return newPlayer;
//     }

//     takeTurn(opponent) {
//         this.turn++;

//         for (var i = 0; i < this.activeSpells.length; i++) {
//             var spell = this.activeSpells[i];

//             if (spell.duration > 0) {
//                 spell.effect(this, opponent);
//                 spell.duration--;

//                 if (spell.duration === 0 && spell.end) {
//                     spell.end(this, opponent);
//                 }
//             }
//         }
//     }

//     start() {
//         this.hp = this.initial.hp;
//         this.spent = 0;
//         this.armor = 0;
//         this.turn  = 0;
//         this.activeSpells = [];
//         if (this.isWizard)
//             this.mana = this.initial.mana;
//         else
//             this.damageAmt = this.initial.damageAmt;
//     }
// }




// var me   = new Player({hp: 50, mana: 500}, true);
// var boss = new Player(bossStats);

// var cheapestSpent = Infinity;

// function playAllGames(me, boss, partTwo, depth) {
    
//     depth = depth || 0;

//     for (var i = 0; i < me.spells.length; i++) {
//         var spellMatch = false;
        
//         for (var j = 0; j < me.activeSpells.length; j++) {
//             if (me.activeSpells[j].duration > 1 && i === me.activeSpells[j].idx) {
//                 spellMatch = true;
//             }
//         }

//         if (spellMatch)
//             continue;
//         if (me.spells[i].cost > me.mana) {
//             continue;
//         }
  
//         var newMe = me.duplicate();
//         var newBoss = boss.duplicate();

//         if (partTwo){
//         	newMe.hp--;
//         }
          

//         newMe.takeTurn(newBoss);
//         newMe.attack(newBoss, i);
        
//         newMe.takeTurn(newBoss);
//         newBoss.attack(newMe);


//         if (newBoss.hp <= 0) {
//           console.log( newMe.spent)
//           cheapestSpent = Math.min(cheapestSpent, newMe.spent);
//         }

//         if (newMe.hp > (partTwo ? 1 : 0) && newBoss.hp > 0 && newMe.spent < cheapestSpent){
// 					playAllGames(newMe, newBoss, partTwo, depth + 1);
//         }
          
//     }
// }

// playAllGames(me, boss, false, 0);
// console.log('Part One:', cheapestSpent);
// cheapestSpent = Infinity;
// playAllGames(me, boss, true);
// console.log('Part Two:', cheapestSpent);

	var Boss = function() {
		this.hp = bossStats.hp;
		this.damage = bossStats.damage;
	};

	var Player = function() {
		this.hp = 50;
		this.mana = 500;
		this.armor = 0;
	};

	var spells = {
		'Magic Missile':{cost: 53, damage: 4, heal: 0, time: 0, armor: 0, mana: 0},
		'Drain':{cost: 73, damage: 2, heal: 2, time: 0, armor: 0, mana: 0},
		'Shield':{cost: 113, damage: 0, heal: 0, time: 6, armor: 7, mana: 0},
		'Poison':{cost: 173, damage: 3, heal: 0, time: 6, armor: 0, mana: 0},
		'Recharge':{cost: 229, damage: 0, heal: 0, time: 5, armor: 0, mana: 101}
	};


	var spellsMap = [
		'Magic Missile',
		'Drain',
	  'Shield',
		'Poison',
		'Recharge'
	];
	

	var play = function(player,boss) {
		
		for (var i = 0; i < spellsMap.length; i++) {

			console.log(i)
			
			if(player.hp <= 0 ){
				return i;
			}
			
			player.hp -= 1;
			play(player,boss);

		};

	};

	return play(new Player(), new Boss());

};









	// var castedSpellsCalc = function(old) {
	// 	old.spellsCasted = old.spellsCasted.map( s => {
			
	// 		var thisSpell = spells[s.name];

	// 		s.timeLeft -= 1;
			
	// 		old.boss.hp -= thisSpell.damage;
	// 		old.player.hp += thisSpell.heal;
	// 		old.player.armor = 0 + thisSpell.armor;
	// 	  old.player.mana += thisSpell.mana;

	// 		return s;
	// 	}).filter( s => {
	// 		return s.timeLeft !== 0;
	// 	});

	// 	return old;
	// };

	// var extendPlayerTurn = function(old){
		
	// 	var newArr = [];

	// 	var old = castedSpellsCalc(old);

	// 	for (var i = 0; i < spellsMap.length; i++) {
				
	// 			var thisSpell = spells[ spellsMap[ i ] ];
	// 			var thisSpellName = spellsMap[ i ];
	// 			var newObject = JSON.parse( JSON.stringify( old ) );

	// 			newObject.player.mana -= thisSpell.cost;
				
	// 			if(newObject.player.mana < 0){
	
	// 				continue; 
	// 			}

	// 			if( thisSpell.time !== 0 ){
	// 				if( newObject.spellsCasted.some(s => { return s.name === thisSpellName;}) ){
	
	// 					continue;
	// 				}else{
	// 					newObject.spellsCasted.push({name: thisSpellName, timeLeft: thisSpell.time });
	// 				}

	// 			}else{
	// 				newObject.boss.hp -= thisSpell.damage;
	// 				newObject.player.hp += thisSpell.heal;
	// 			}


	// 			newObject.history.push( thisSpellName );
	// 			newObject.turn = !newObject.turn;


	// 			// spellsCasted
	// 			newArr.push(newObject);

	// 	};

	// 	return newArr;
	// }

	// var symulate = function (inputArr) {

	// 	var inputArr = JSON.parse( JSON.stringify( inputArr ) );
	// 	var rrr = [];

	// 	inputArr.forEach( (option,index) => {
			
	// 		var temp = []

	// 		if(option.turn){

	// 			var temp = extendPlayerTurn(option);
				
	// 		}else{

	// 			option = castedSpellsCalc(option);
	// 			option.turn = !option.turn;
	// 			option.player.hp -= Math.max(1, ( option.boss.damage - option.player.armor ) ); 
	// 			option.history.push('boss');
	// 			var temp = [option]

	// 		}

	// 		temp.filter(f=>{
				
	// 			if(f.player.hp <= 0){

	// 				return false;
	// 			}

	// 			if(f.player.hp > 0 && f.boss.hp <= 0){
	// 				WIN.push(f)
	// 				return false;
	// 			}
				
	// 			rrr.push(f);

	// 		});


	// 	})

	// 	return rrr;

	// }

	// var init = function() {
			
	// 		return [{
	// 			turn: true,
	// 			spellsCasted: [],
	// 			player: new Player(),
	// 			boss: new Boss(),
	// 			history: []
	// 		}];

	// };


	// var a = symulate(	init() ) ;
	// var b = symulate(	a );
	// var c = symulate(	b );
 //  var d = symulate(	c );
	// var e = symulate(	d );
	// var f = symulate(	e );
	// var g = symulate(	f );
	// var h = symulate(	g );
	// var i = symulate(	h );
	// var j = symulate(	i );
	// var k = symulate(	j );
	// var l = symulate(	k );
	// var m = symulate(	l );
 //  var n = symulate(	m );
 //  var o = symulate(	n );
 //  var p = symulate(	o );
 //  var r = symulate(	p );
 //  var q = symulate(	r );
 //  var s = symulate(	q );
 //  var t = symulate(	s );
 //  var u = symulate(	t );
 //  var u = symulate(	u );
 //    var u = symulate(	u );
 //      var u = symulate(	u );

	// //console.log(g)
	// // while(a.length !== 0){
	// // 	a = symulate( a	) ;
		
	// // }
	// 	console.log('-----------------')
	// 	console.log('LEFT: ' + u.length)

	// 	console.log('WIN: ' + WIN.length);

	// 	console.log(u[1])
	// // console.log(LOST);
	// console.log('-----------------')
	// console.log(MANA);

	// var c = [];
	// WIN.forEach( f=>{
	// 	if(f.history.length === 35)
	// 	c.push(f.history)
	// })

	// c.reduce( (p,cu,i) => {

	// 	console.log(JSON.stringify(p)==JSON.stringify(cu))
	// 	return p;
	// },c[0]);
//this game will have only 1 state 
var GameState = { 
init: function() { 

}, 

preload: function() { 

},  
create: function() { 

}, 
update: function() { 
 
}, 

}; 

//initiate the Phaser framework 
var game = new Phaser.Game(480, 480, Phaser.AUTO); 

game.state.add('GameState', GameState); 
game.state.start('GameState');

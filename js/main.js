//this game will have only 1 state 
var GameState = { 
init: function() { 
this.game.physics.startSystem(Phaser.Physics.ARKADE); 
this.cursors = this.game.input.keyboard.createCursorKeys();



}, 

preload: function() { 

 this.load.image('kvadrat', 'img/tri.png ')
this.speed = 2
},  
create: function() { 

game.stage.backgroundColor = "#ffffff";

this.blocks = [] 


this.a = [{x: 52, y: 0},{x: 52, y: 51}, {x:103, y:0}];
this.a.forEach((element, i) => { 
this.blocks[i] = this.add.sprite(element.x, element.y, 'kvadrat'); 
this.game.physics.arcade.enable(this.blocks[i]) 
}) 

this.key = 0; 
this.delay = 1000; 
},
 
update: function() { 
 this.blocks.forEach((element) => { 
element.body.position.y +=this.speed;
 })


this.delay += 1000; 
},

}; 

//initiate the Phaser framework 
var game = new Phaser.Game(480, 480, Phaser.AUTO); 

game.state.add('GameState', GameState); 
game.state.start('GameState');

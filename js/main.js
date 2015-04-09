var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'platformer', { preload: preload, create: create, update: update });

function preload() {

	game.load.tilemap('level1', 'assets/materialmap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('bg', 'assets/background.png');
    game.load.image('ball', 'assets/playerball.png');
	game.load.image('ice', 'assets/ice.png');
	game.load.image('rubber', 'assets/rubber.png');
	game.load.image('wood', 'assets/wood.png');
	game.load.image('win', 'assets/win.png');
	game.load.image('lose', 'assets/lose.png');

}

var map;
var tileset;
var layer;
var ball;

function create() {

    game.add.image(0, 0, 'bg');
	map = this.add.tilemap('level1');
	map.addTilesetImage('ice');
	map.addTilesetImage('win');
	map.addTilesetImage('lose');
	map.addTilesetImage('rubber');
	map.addTilesetImage('wood');
	
}

function update() {
	
}
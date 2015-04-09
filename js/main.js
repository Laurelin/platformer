var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'platformer', { preload: preload, create: create, update: update });

function preload() {

	game.load.tilemap('level1', 'assets/materialmap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('bg', 'assets/background.png');
    game.load.image('ball', 'assets/playerball.png');
	game.load.image('tiles', 'assets/tiles.png');

}

var map;
var tileset;
var layer;
var ball;

function create() {

    this.add.image(0, 0, 'bg');
	map = this.add.tilemap('level1');
	map.addTilesetImage('tiles');
	
	layer = map.createLayer('TileLayer');
	layer.resizeWorld();
	
	map.setCollisionBetween(0, 4)
	
	
}

function update() {
	
}
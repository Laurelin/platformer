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
var bodies;

function create() {

	this.physics.startSystem(Phaser.Physics.P2JS);

	this.world.setBounds(0, 0, 1920, 960);
    this.add.image(0, 0, 'bg');
	map = this.add.tilemap('level1');
	map.addTilesetImage('tiles');
	
	layer = map.createLayer('Tile Layer 1');
	
	
	map.setCollisionBetween(0, 4)
	
	bodies = this.physics.p2.convertTilemap(map, layer);
	
	bodies[2].body.setMaterial(woodMaterial);
	
}

function update() {
	
}
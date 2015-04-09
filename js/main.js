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
var thrust = 10000;

function create() {

	this.physics.startSystem(Phaser.Physics.P2JS);

	this.world.setBounds(0, 0, 1920, 960);
    this.add.image(0, 0, 'bg');
	map = this.add.tilemap('level1');
	map.addTilesetImage('tiles');
	
	layer = map.createLayer('Tile Layer 1');
	
	
	map.setCollisionBetween(0, 4)
	
	bodies = this.physics.p2.convertTilemap(map, layer);
	
	this.physics.p2.restitution = 0.5;
    this.physics.p2.gravity.y = 300;
	
	ball = this.add.sprite(130, 30, 'ball');
	this.physics.p2.enable(ball);
	ball.body.setCircle(37);
	
	
	cursors = game.input.keyboard.createCursorKeys();
	game.input.onDown.add(click, this);
}

function click(pointer){
	
	var x = distance(ball, pointer);
	var angle = angleOf(ball, pointer);
	
	ball.body.force.x = Math.cos(angle)*thrust;
	ball.body.force.x = Math.sin(angle)*thrust;
}

function distance(sprite, pointer){
	
		var s = Math.sqrt(Math.pow((pointer.x - sprite.x), 2)+ Math.pow(pointer.y - sprite.y, 2));

		
		return s;
	
	}
	
function angleOf(sprite, pointer){
		var ang = Math.atan2( sprite.y - pointer.y, sprite.x - pointer.x);
		return ang;
}

function update() {
	
	if (cursors.up.isDown)
    {
        this.camera.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        this.camera.y += 4;
    }

    if (cursors.left.isDown)
    {
        this.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        this.camera.x += 4;
    }
	
}
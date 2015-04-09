var game = new Phaser.Game(1920, 3200, Phaser.CANVAS, 'platformer', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('bg', 'assets/background.png');
    game.load.image('ball', 'assets/sprites/red_ball.png');
	game.load.image('sky', 'assets/skies/cavern2.png');

}

function create() {

    game.add.image(0, 0, 'bg');
	
}

function update() {
	
}
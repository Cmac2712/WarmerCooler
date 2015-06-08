// Helper functions
var $$ = require('./classes/Helper');

// Classes
var Game   = require('./classes/Game');
var Player = require('./classes/Player');
var Level  = require('./classes/Level');

var Stage  = new Game.Build(document.getElementById('app'));
var Player = new Player.Cursor(Stage.stage);
var Point1 = new Stage.point($$.getRandomNumber(Stage.stageWidth), $$.getRandomNumber(Stage.stageWidth));

var interval; 
var currentLevel = 1;
// Define our levels
var levels = [
    undefined,
    new Level.Create(1, 'Welcome', 'Well Done! Now for level 2'),
    new Level.Create(2, 'Welcome', 'Well Done! Now for level 3'),
    new Level.Create(2, 'Welcome', 'Well Done! Now for level 4')
];
// Enable this for a marker on the pont
var DEBUG = true;

if (DEBUG) {
    pointer.style.position = "absolute";
    pointer.style.left     = Point1.x + "px";
    pointer.style.top      = Point1.y + "px";
}

// This is the main loop of out game
function run () {
    var distance  = $$.getDistance(Player.getMousePos(), Point1);
    var thisLevel = levels[currentLevel];
    console.log(currentLevel);

    Stage.changeColor({
        r: 100,
        g: distance,
        b: distance
    });

    if ( Point1.x > Player.getMousePos().x - 10 && Point1.x < (Player.getMousePos().x + 10) &&
	 Point1.y > Player.getMousePos().y - 10 && Point1.y < (Player.getMousePos().y + 10) ) {
	    console.log('Found!');
		thisLevel.finishLevel();
		currentLevel++;
		console.log(thisLevel);
		thisLevel.startLevel();
		requestAnimationFrame(run);
	 } else {
	    requestAnimationFrame(run);
	 }
}

run();

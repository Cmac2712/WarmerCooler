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
    new Level.Create(3, 'Welcome', 'Well Done! Now for level 4'),
    new Level.Create(4, 'Welcome', 'Well Done! Now for level 5'),
    new Level.Create(5, 'Welcome', 'Well Done! Now for level 6'),
    new Level.Create(6, 'Welcome', 'Well Done! Now for level 7'),
    new Level.Create(7, 'Welcome', 'Well Done! Now for level 8'),
    new Level.Create(8, 'Welcome', 'Well Done! Now for level 9')
];
// Enable this for a marker on the pont
const DEBUG = true;

// This is the main loop of game
function run () {
    var thisLevel = levels[currentLevel];
    var point     = Point1;
    var distance  = $$.getDistance(Player.getMousePos(), point);
    
    // Chage color of the stage depending on distance of cursor from point
    Stage.changeColor({
        r: 100,
        g: distance,
        b: distance
    });

    $$.setDebugMarker(DEBUG, pointer, point);

    if ( point.x > Player.getMousePos().x - 10 && point.x < (Player.getMousePos().x + 10) &&
	 point.y > Player.getMousePos().y - 10 && point.y < (Player.getMousePos().y + 10) ) {
		// Complete Level
		thisLevel.finishLevel();
		// Advance to next level
		currentLevel++;
console.log(thisLevel);
		// Begin new level
		thisLevel.startLevel();
		Point1 = new Stage.point($$.getRandomNumber(Stage.stageWidth), $$.getRandomNumber(Stage.stageWidth));


		requestAnimationFrame(run);
	 } else {
	    requestAnimationFrame(run);
	 }
}

run();

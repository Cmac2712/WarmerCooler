var Game   = require('./classes/Game');
var Player = require('./classes/Player');

var Stage  = new Game.Build(document.getElementById('app'));
var Player = new Player.Cursor(Stage.stage);
var Point1 = new Game.Point(getRandomNumber(Stage.stageWidth), getRandomNumber(Stage.stageWidth));
var interval; 


function getRandomNumber(limit) {
    var num = Math.random()*limit; 
    return num.toFixed(0);
}

function getDistance() {
    var a = Player.getMousePos().x -Point1.x;
    var b = Player.getMousePos().y -Point1.y;
    
    return Math.sqrt( a*a + b*b ).toFixed(0);
}

//pointer.style.position = "absolute";
//pointer.style.left     = Point1.x + "px";
//pointer.style.top      = Point1.y + "px";
//
function run () {
    var distance = getDistance();

    Stage.changeColor({
        r: 100,
        g: distance,
        b: distance
    });

    if ( Point1.x > Player.getMousePos().x - 10 && Point1.x < (Player.getMousePos().x + 10) &&
	 Point1.y > Player.getMousePos().y - 10 && Point1.y < (Player.getMousePos().y + 10) ) {
	    clearInterval(interval);
	console.log("Point1 found!");
    }
}

interval = setInterval(run, 50);

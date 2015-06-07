export class Cursor {
    constructor(Stage) {
	this.posX  = 0;
	this.posY  = 0;
	this.stage = Stage

	Stage.onmousemove = function (e) {
	    //console.dir(document.getElementById('app'))

	    this.posX = e.clientX - Stage.offsetLeft; 
	    this.posY = e.clientY;
	}.bind(this);
    }

    getMousePos() {
	return {
	    x: this.posX,
	    y: this.posY
	}
    }
}

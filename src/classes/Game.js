export class Build {
    constructor(el) {
	this.stage = el;
	this.stage.style.backgroundColor = "rgba(255, 255, 255, 1)";
	this.stageWidth = el.offsetWidth;
    } 

    changeColor(col) {
	this.stage.style.backgroundColor = "rgba("+col.r+", "+col.g+", "+col.b+", 1)";
    }

    point (x, y) {
	this.x = x;
	this.y = y;
    }
}

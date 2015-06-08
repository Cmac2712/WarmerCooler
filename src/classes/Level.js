export class Create {
    constructor (points, startMessage, endMessage, finished) {
	this.points = points || 0;
	this.startMessage = startMessage || "";
	this.endMessage = endMessage || "";
	this.finished = finished || false;
    }
    
    startLevel() {
	alert(this.startMessage);
    }

    finishLevel () {
	alert(this.endMessage);
	this.finished = true;
    } 
}

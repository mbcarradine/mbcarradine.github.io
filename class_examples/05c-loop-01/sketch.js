// write a loop that cycles through for 60 times
// draw 60 lines from left to right of the screen
// map one attribute to the index of the loop, such as color, line thickness etc
// EXTRA: Make this interactive!

function setup() {
	createCanvas(600,600);  
}

function draw() {

	stroke(255,0,0);

	for(var i=0; i<60; i++){
		stroke(map(i,0, 59, 100, 255),map(i,0, 59, 255, 0),0);
		var xPos = map(i, 0, 59,0, width);
		line(xPos,50, xPos, 100);
		console.log(i);
	}
}
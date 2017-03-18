// Track the mouse position
// If the mouse is the left half of the screen, make it one color
// If the mouse is the right half of the screen, make it a different color
// write all positions in text 

function setup() {
	createCanvas(500,500);
  
}

function draw() {





	// if the mouse position is less than half the canvas
	if(mouseX<width/2){
	background(150);
		rect(100, 100, 50, 50);
	}else{
	// all other cases
	background(100);
	ellipse(400, 125, 40, 40);
	}

	noStroke();
	fill(255,0,0);
	text("Mouse position: " + mouseX + ", " + mouseY, 30,30);


	stroke(255,200,0);
	line(width/2,0,width/2,height);
}
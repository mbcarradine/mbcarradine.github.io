// Track the mouse position
// If the mouse is the left half of the screen, make it one color
// If the mouse is the right half of the screen, make it a different color
// write all positions in text 

function setup() {
	createCanvas(500,500);
  
}

function draw() {





	// if the mouse position is small than half
	if(mouseX<width/2){
	background(200);
	}else{
	// all other cases
	background(100);
	}

	noStroke();
	fill(255,0,0);
	text("Mouse: " + mouseX + ", " + mouseY, 30,30);
	text("Width/2: " +width/2, 30,50);

	stroke(255,0,0);
	line(width/2,0,width/2,height);
}
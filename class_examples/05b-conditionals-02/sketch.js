// Track the mouse position
// Draw a rectangle on the screen
// If the mouse is within the boundaries of the rectangle change the color of the rectangle
// write all positions in text 
// EXTRA: draw 5 randomly sized circles (shapes) and track the mouse over

var rectX, rectY, rectW, rectH;

function setup() {
	createCanvas(500,500);  
	rectX = 150;
	rectY = 200;
	rectW = 200;
	rectH = 100;
}

function draw() {

	background(200);
	if(mouseX>rectX && mouseX<rectX+rectW 
		&& mouseY > rectY && mouseY<rectY+rectH){
		fill(255, 0, 0);
		console.log("hitttt");
	}else{
		fill(100);
	}

	rect(rectX, rectY, rectW, rectH);
	noStroke();
	fill(255,0,0);
	text("Mouse: " + mouseX + ", " + mouseY, 90,20);
	text("rectX: " + rectX, 20, 20);
	text("rectY: " + rectY, 20, 40);
	text("rectW: " + rectW, 20, 60);
	text("rectH: " + rectH, 20, 80);
	
}
function setup() {
	createCanvas(windowWidth, windowHeight);

  
}

function draw() {
	background(255);

var x = 20;
var y = 20;
var w = 400;
var h = 400;


noStroke();
fill(200);
rect(x, y, w, h);



fill(0);
ellipse(mouseX, mouseY, 20,20);

  ellipse(
  	map(mouseX,0, width, x, w+x),
  	map(mouseY,0, height, y, h+y),  	
  	20,
  	20

);
}
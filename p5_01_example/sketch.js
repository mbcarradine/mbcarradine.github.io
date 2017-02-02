/*
Keep track of the mouse click positions
draw a polygon from all the mouse click positions
*/


var x = [];
var y = [];

function setup() {

createCanvas(windowWidth,windowHeight);

}

function draw() {
	background(220);
	stroke(200,0,0);
  //draw a rectangle
//fill(255,192,203);
 // rect(mouseX-100, mouseY-100, 200, 200,10);

  //draw a line
    line(0,0,mouseX, mouseY);

//draw a polygon with the values
fill(200)
beginShape();
for(var i=0; i<x.length; i++) {
	vertex(x[i], y[i]);
var coordinateText = x[i] + ", " + y[i];
textSize(14);
fill(0, 102, 153);
text(coordinateText,x[i], y[i]);
}

endShape(CLOSE);


}

function mouseReleased(){
	// console.log("click: " + mousex + ", " + mouseY);

	append(x, mouseX);
	append(y, mouseY);
	console.log(x);
}
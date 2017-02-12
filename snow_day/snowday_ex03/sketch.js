

function setup() {
	createCanvas(600,600);  
}

function draw() {
	background(220);
line (300,0,300,600);
stroke(0);
var xUnit = width/20;
var yUnit = height/25;
for(var i=0; i<25; i++)
ellipse(300, yUnit *i, 10, 10);
fill(100);


}



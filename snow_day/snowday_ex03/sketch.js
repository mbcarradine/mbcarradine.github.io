

function setup() {
	createCanvas(600,600);  
}

function draw() {
	background(220);
line (300,0,300,600);
stroke(0);
//var xUnit = width/20;
var yUnit = height/25;

for(var i=0; i<25; i++){
	var xColor = map(i,0,20,50,255);
	var ellipseSize = map(i,0,30,10,30);
	for(var j=0; j<25; j++){
		var yColor = map(i,0,20,50,255);


ellipse(300, 10 + yUnit *i, ellipseSize, ellipseSize);
fill(xColor,yColor,255);


}
}
}

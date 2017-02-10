// write a nested loop with 20 counts each
// map the two indices to the x and y position of ellipses
// map two other attributes to the indices
// EXTRA: Make this interactive and in motion

function setup() {
	createCanvas(600,600);  
}

function draw() {

noStroke();
fill(0);
var xUnit = width/20;
var yUnit = height/20;
for(var i=0; i<20; i++){
	var xColor = map(i, 0,20,0,255);
	var ellipseSize = map(i,0,20,5,30);
	for(var j=0; j<20; j++){
		var yColor = map(i, 0,20,0,255);
//it's not until the "fill" command runs that the code knows we're talking about color
		fill(xColor,yColor,0);
	ellipse(xUnit *i, yUnit *j, ellipseSize, ellipseSize);
}
}
}
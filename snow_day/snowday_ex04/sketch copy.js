// write a nested loop with 20 counts each
// map the two indices two the x and y position of ellipses
// map two other attributes to the indices
// EXTRA: Make this interactive and in motion

function setup() {
	createCanvas(600,600);  
}

function draw() {

	noStroke();

	for(var i=0; i<20; i++){
		for(var j=0; j<20; j++){
			// map the position relative to the loop indices
			var posX = map(i,0, 19, 0, width);
			var posY = map(j,0, 19, 0, height);
			
			// map the size relative to the i index
			var size = map(i,0, 19, 10, 50);
			
			// map the color relative to the j index
			var col = map(j,0, 19, 200, 20);
			fill(col);
			ellipse(posX, posY, size,size);
		}

	}
}
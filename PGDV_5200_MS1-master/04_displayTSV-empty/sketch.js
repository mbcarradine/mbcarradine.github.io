function setup(){
	createCanvas(windowWidth, windowHeight);
	loadTable("data/LaborInNonAgricultSector.tsv", "tsv", "header", showData);



	
}

function showData(data){
	console.log(data.get(7,3));
	var rows = data.getRowCount();
	var cols = data.getColumnCount();

	console.log ("There are " + rows + " rows, and " + cols + " columns.");

	
	var val, row, col, min, max;
max = 0;
min = 44;

fill(0);
for(row=0; row<rows; row++){

		for(col=3; col<cols; col++){
			val = float(data.getString(row, col));
		if(val>max){
			max = val;
		}
if(val<min){
	min = val
}
}
}
console.log("Min: " + min + " Max: " + max);

//draw scaled values
for(row=0; row<rows; row++){
noFill();
beginShape();
	for(col=3; col<cols; col++){
		val = float(data.getString(row, col));
		vertex(
			(width/cols)*col,
			map(val,min, max, height,0)
			)
		ellipse(
			(width/cols)*col,
			map(val,min,max,height,0),
			10,
			10
			);

		text(val,
			(width/cols)*col +10,
			map(val,min, max, height, 0);
			)
	}
}


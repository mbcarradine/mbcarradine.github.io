function setup() {
	createCanvas(windowWidth, windowHeight);
	loadTable("groceries.tsv", "tsv", "header", showData);
}

function showData(data) {
	var rows = data.getRowCount();
	var lineHeight = height/rows;


	console.log("there are " + rows + " rows in here");
	for(var i=0; i<rows; i++){
		var amount = data.get(i, 0);
		var unit = data.get(i,1);
		var item = data.get(i,2);
		var source = data.get(i,3);
		
if(source=="market"){
	fill(255,0,0);
}else{

		fill(0);
}
text(amount + " " + unit + " " + item + " " + source,
width/2, 20 + lineHeight*i);


	}
}
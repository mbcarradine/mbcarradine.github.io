function setup(){
createCanvas(windowWidth, windowHeight);
	loadJSON("colors.json", showData);

}

function showData(colors){
	console.log(colors.red);
	fill(colors.blue);
	textSize(100);
	text(colors.blue, width/2, height/2);
	//i'm telling it to look up the 'blue' value and print its text

//console.log("data has been loaded");

}
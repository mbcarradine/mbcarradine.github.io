var quotes;

function preload() {

quotes = loadJSON("quotedata.json");
}


function setup() {
	createCanvas(600,600);


}

function draw() {
	background(0);
	fill(quotes .r, quotes.g, quotes.b);
	text(quotes.quote, 10, 50);

}


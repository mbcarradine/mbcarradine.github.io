var txt; // will hold the text
var counts = {};
var keys = []; //storing words for later sorting

function preload(){
txt = loadStrings('obamafinalspeech.txt');
}

function setup() {
var allwords = txt.join("\n");
var tokens = allwords.split(". ");
console.log(tokens);
for (var i=0; i < tokens.length; i++) {
var word = tokens[i].toLowerCase();
if (!/\d+/.test(word)) {


} 
}
}
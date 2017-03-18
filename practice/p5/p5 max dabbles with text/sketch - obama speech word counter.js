var txt; // will hold the text
var counts = {};
var keys = []; //storing words for later sorting

function preload(){
txt = loadStrings('obamafinalspeech.txt');
}

function setup() {
var allwords = txt.join("\n");
var tokens = allwords.split(/\W+/);
console.log(tokens);
for (var i=0; i < tokens.length; i++) {
var word = tokens[i].toLowerCase();
if (!/\d+/.test(word)) {

if (counts[word] === undefined) {
counts[word] = 1;
keys.push(word);
} else {
counts[word] = counts[word] + 1;
    }
  }
}

keys.sort(compare);

function compare(a,b) {
var countA = counts[a];
var countB = counts[b];
return countB - countA; //descending sort
}

for (var i = 0; i < keys.length; i++) {
var key = keys[i];

createDiv(key + " " + counts[key]);

} 

}
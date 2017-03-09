var input;
var button;

var nlp = window.nlp_compromise;

function setup(){
noCanvas();

input = createInput('It was a dark and stormy night.');
button = createButton('submit');
input.changed(process);
button.mousePressed(process);
input.size(400);

}

function process(){
var s = input.value();
var statement = nlp.statement(s);


var output = statement.negate().text();
createP(output);

}


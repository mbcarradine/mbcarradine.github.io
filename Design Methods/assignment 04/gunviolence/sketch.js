var data;
var margin = 50;
var x = 0;
var j = 0;
var y = 0;
var speed = .001;
var headFont
var bodyFont

var col = {
r: 255,
g: 40,
b: 0
};

function preload() {
  data = loadTable('gundata20171105.csv', 'csv', 'header');
  quotes = loadTable('quotes.csv', 'csv', 'header');

   headFont = loadFont("Inconsolata.otf");
   bodyFont = loadFont("Inconsolata.otf");
}

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw(){
var state = data.getColumn ("state");
var city = data.getColumn ("city");
var killinj = int(data.getColumn ("killinj"));
var month = data.getColumn ("month");
var r = data.getColumn ("r");
var g = data.getColumn ("g");
var b = data.getColumn ("b");

var name = quotes.getColumn ("name");
var quote = quotes.getColumn ("quote");
var amount = quotes.getColumn ("amount");


//var timeline = (windowHeight-75)
background (25);
textFont(headFont);
textSize(46);
fill('white');
//textAlign(LEFT);
text('Gun Violence in America', 25, 100);
textSize(26);
text ('The past 72 hours', 25, 125);

textFont(bodyFont);
textSize(16);
textAlign(RIGHT)

text ('Sources', windowWidth - 50, windowHeight - 65);
text ('The Gun Violence Archive', windowWidth - 50, windowHeight - 50);
text ('Center for Responsive Politics', windowWidth - 50, windowHeight - 35);

textAlign(LEFT)
frameRate(10);
for (j = 0; j < name.length; j++){
  	textSize(14);

fill('white');
//textAlign(RIGHT);
text((quote[j]) + "\n" + (name[j]) + ", " + (amount[j]), (1000 - x - [j]* 15), -400+ y + ([j]* 50));

if (y > height || y < 0){
speed = speed * -1;
}

 }
//display data
 //translate(width/50, height/50);
frameRate(8);
for (var i = 0; i < state.length; i++){
   translate (20);
   fill(255, 40, 0);

rotate(radians(frameCount/500));

textFont(bodyFont);
textSize((14 * killinj[i])+1);
text((city[i]) + ", " + (state[i]) + ", " + (killinj[i]), ((Math.random() * 1000)), -100 + (Math.random() * 1000));
//textSize(killinj[i]);
    if (x > width || x < 0){
    speed = speed * -1;
    }

    if (y > 5000 || y <  - 5000)
    {
    speed = speed * -1;
    }

    x = x + speed
    y = y + speed

      } //close loop
    } //close draw

 

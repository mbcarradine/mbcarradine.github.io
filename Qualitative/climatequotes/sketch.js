var data;
var margin = 50;

function preload() {
  data = loadTable('denial.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
}

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw(){
var quote = data.getColumn ("quote");
var category = data.getColumn ("category");
var who = data.getColumn ("who");
var catcode = data.getColumn ("catcode");
var when = data.getColumn ("when");
var month = data.getColumn ("month");
var r = data.getColumn ("r");
var g = data.getColumn ("g");
var b = data.getColumn ("b");
var timeline = (windowHeight-75)
background (25);
textFont(myFont);
textSize(26);
fill('white');
text('Evolution of Denial', 25, 100);
textSize(16);
text('How Are Politicians Selling their Skepticism of Climate Change?', 25, 140);
//draw key

 noStroke();
textSize(12);
fill (255, 140, 140);
rect (25,200,10,10);
text ("Alternative facts", 40, 210);
fill (51, 153, 255);
rect (25,225,10,10);
text ("It still gets cold sometimes", 40, 235);
fill (102, 204, 0);
rect (25, 250,10,10);
text ("It's not worth the money", 40, 260);
fill (192, 192, 192);
rect (25, 275,10,10);
text ("We'll can never truly know", 40,285);
translate(margin, margin); 


//display data
  translate(width/10, height/10);
for (var i = 0; i < quote.length; i++){
  for (j = 0; j < 41; j++)
    rotate((j/2) / 16);
   fill((r[i]), (g[i]), (b[i]));
strokeWeight(0);
     textFont(myFont);    
      textSize(15);
      rotate(radians(frameCount/175));
text((quote[i]), 200, 400);
   fill((r[i]-100), (g[i]-100), (b[i])-100);
text((who[i]) + ", " + (month[i]) + " " + (when[i]), 200, 420);


  }
}

 




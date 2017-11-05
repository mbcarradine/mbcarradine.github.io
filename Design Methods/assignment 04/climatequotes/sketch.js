var data;
var margin = 50;

function preload() {
  data = loadTable('denial.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
  bodyFont = loadFont("Gotham-Book.otf");
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
text('Gun Violence in America', 25, 100);
textSize(16);
//text('How Are Politicians Selling their Skepticism of Climate Change?', 25, 140);
//draw key
textFont(bodyFont);

// textSize(12);
// fill (228, 95, 86);
// rect (25,200,10,10);
// text ("Northeast", 40, 210);
// fill (66, 133, 244);
// rect (25,225,10,10);
// text ("Northwest", 40, 235);
// fill (102, 204, 0);
// rect (25, 250,10,10);
// text ("Southeast", 40, 260);
// fill (192, 192, 192);
// rect (25, 275,10,10);
// text ("Southwest", 40,285);
// translate(margin, margin); 


//display data
  translate(width/50, height/50);
for (var i = 0; i < quote.length; i++){
  for (j = 0; j < 400; j++)
    translate (40);
   fill((r[i]), (g[i]), (b[i]));

textFont(bodyFont);  
      textSize(15);
      rotate(radians(frameCount/500));
//text((quote[i]), 200, 400);
 //  fill((r[i]-50), (g[i]-50), (b[i])-50);
text((who[i]) + ", " + (quote[i]) + " " + (when[i]) + " killed or injured", (windowWidth - 500), -300);



  }
}

 





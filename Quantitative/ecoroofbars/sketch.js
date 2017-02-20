var table;
var myFont;

function preload(){
  table = loadTable('data/ecoroofcountbyneighborhood.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
}




function setup() {
  var roofs = table.getColumn("RoofCount");
    var hood = table.getColumn("Neighborhood");

  
  var width = 800, // canvas width and height
      height = 600,
      margin = 50,
      w = width - 2 * margin, // chart area width and height
      h = height -2 * margin;
  
  var barWidth =  (h / roofs.length) * 2.5; // width of bar
  var barMargin = (h / roofs.length) * 0.8; // margin between two bars
  
  createCanvas(windowWidth, windowHeight);
  
  textSize(10);
  
  push();
  translate(margin, margin); // ignore margin area
    background(0);
  for(var i=0; i<roofs.length; i++) {
    push();
     fill(0,255,0);
  noStroke();
    translate(200, i* (barWidth + barMargin)); // jump to the top right corner of the bar
    rect(0, 0, (roofs[i]*20), barWidth); // draw rect

    fill('black');

   text((roofs[i]), 0, barWidth/2 + 5); // write data
     textFont(myFont);
       noStroke();
   fill('white');
     textAlign(RIGHT);
   text((hood[i]), margin-65, barWidth/2 + 5); // write data
     textFont(myFont);
    pop();
  }
  
  pop();
  //textStyle(BOLD);
  noStroke();
  textAlign(LEFT);
    textFont(myFont);
  textSize(24);
     fill('white');
  text("Where are all of the ecoroofs in NYC?", margin+200,margin - 20);



}
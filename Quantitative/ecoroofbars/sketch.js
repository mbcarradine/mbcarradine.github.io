var table;
var myFont;

function preload(){
  table = loadTable('data/roofcountbyneighborhood.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
}




function setup() {
  var roofs = table.getColumn("RoofCount");
    var hood = table.getColumn("Neighborhood");
  createCanvas(windowWidth, windowHeight);
  
  var width = windowWidth, // canvas width and height
      height = windowHeight,
      margin = 50,
      w = windowWidth // chart area width and height
      h = windowHeight
  
  var barWidth =  (h / roofs.length) * 0.65; // width of bar
  var barMargin = (h / roofs.length) * 0.3; // margin between two bars
  

  
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
          noStroke();
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
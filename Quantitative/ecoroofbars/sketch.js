var table;
var myFont;
var margin = 50;

  


function preload(){
  table = loadTable('data/roofcountbyneighborhood.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
}




function setup() { 
    createCanvas(windowWidth, windowHeight);

      var roofs = table.getColumn("RoofCount");
    var hood = table.getColumn("Neighborhood");
    var width = windowWidth; // canvas width and height
  var height = windowHeight;
    var cw = (windowWidth)*.75; // chart area width and height
  var  ch = (windowHeight)*.75;
    var barWidth =  (cw / roofs.length) * 0.65; // width of bar
  var barMargin = (ch / roofs.length) * 0.3; // margin between two bars
  
  textSize(10);
  push();
  translate(margin, margin); // ignore margin area
    background(33,32,30);


  for(var i=0; i<roofs.length; i++) {
    push();
     fill(185,216,57);
  noStroke();
    translate(200, i* (barWidth + barMargin)); // jump to the top right corner of the bar
    rect(0, 0, (roofs[i]*25), barWidth); // draw rect
fill(33,32,30);

     textFont(myFont);
            noStroke();
   text((roofs[i]), 0, barWidth/2 + 5); // write roofcount
     textFont(myFont);
       //noStroke();
   fill('white');
          noStroke();
     textAlign(RIGHT);
   text((hood[i]), margin-65, barWidth/2 + 5); // write neighborhood
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
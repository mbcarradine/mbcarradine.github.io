var table;
var myFont;
var margin = 50;

  


function preload(){
  table = loadTable('gundeaths.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
}




function setup() { 
    createCanvas(windowWidth, 1200);

      var roofs = table.getColumn("KilledInj");
    var hood = table.getColumn("State");
    var width = windowWidth; // canvas width and height
  var height = windowHeight;
    var cw = (windowWidth)*.99; // chart area width and height
   var  ch = (windowHeight)*.99;
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
    rect(0, 0, (roofs[i]*20), barWidth,0, HALF_PI); // draw rect
fill(33,32,30);

     textFont(myFont);
            noStroke();
   text((roofs[i]), 0, barWidth/2 + 5); // write roofcount
     textFont(myFont);
       //noStroke();
   fill('white');
          noStroke();
     textAlign(RIGHT);
           rotate(radians(frameCount/280));

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
  text("Gun deaths in the last 72hrs", margin+200,margin - 20);



}
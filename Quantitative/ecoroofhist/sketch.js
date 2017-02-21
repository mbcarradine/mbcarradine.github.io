var table;
var neighbCounts = [];
var maxRoofs, minRoofs, maxCount, minCount;
var margin = 250;
var myFont;


//preloading dataset and custom fonts



function preload(){
  table = loadTable('data/ecoroofcountbyneighborhoodv1.csv', 'csv', 'header');
  myFont = loadFont("Gotham-Black.otf");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData(); 
  displayData();
  drawLabels();
}

function loadData() {
    var numRoofs = table.getColumn("RoofCount");
    maxRoofs = 0;
    minRoofs = 1000;

   
    for(var i=0; i<numRoofs.length; i++){
      var roofCount = int(numRoofs[i]);
      if(roofCount >maxRoofs){
        maxRoofs = roofCount;
      }
      if(roofCount < minRoofs){
        minRoofs = roofCount;
        }
    }





for(var i=0; i<maxRoofs+1; i++){
      append(neighbCounts, 0);
    }
    


    // count how many of eco roofs per neighborhood
    for(var i=0; i<numRoofs.length; i++){
      var roofCount = int(numRoofs[i]);
       neighbCounts[roofCount]++;
    }

    maxCount = 0;
    minCount = 1000;

    for(var i=0; i<neighbCounts.length;i++){
        if(neighbCounts[i]>maxCount){
          maxCount = neighbCounts[i];
        }
        if(neighbCounts[i]<minCount){
          minCount = neighbCounts[i];
        }
    }
  




}

function displayData(){
    background(33,32,30);

     fill(185,216,57);
  noStroke();
  // go through building count array
  // map the x value to roof count
  // map the y value to number of neighborhoods
  for(var i=0; i<neighbCounts.length; i++){
      if(neighbCounts[i]>0){
        var x = map(i,0, neighbCounts.length, margin, width-margin);
        var y = map(neighbCounts[i], minCount, maxCount,height-margin,margin);
        rect(x-25,y,25,y - (height-margin));
        // var textDisplay = neighbCounts[i] + " neighborhoods" + i + " ecoroofs.";
      }
  }
}

function drawLabels(){

  // drawing x axis
  stroke(255);

  line(margin,height-margin,width-margin,height-margin);
  stroke(255);
  textAlign(CENTER);
  // draw the sections and add text for each section
  for(var i=0; i<neighbCounts.length + 5; i+=5){
    var y = height-margin+30;
    x = map(i,0, neighbCounts.length,margin, width-margin);
//    noStroke();
      textFont(myFont);
    fill(255);
    text(i, x, y);
    stroke(255);
    line(x,y-12,x, y-30);
  }
  // x axis label
  textAlign(RIGHT);
  noStroke();
  textFont(myFont);
  textStyle(NORMAL);
  text("Number of ecoroofs", width-margin - 180,height-margin+70);

  //  y Axis
  stroke(255);
  line(margin,height-margin ,margin,margin);
  noStroke();
  textAlign(RIGHT);
  textStyle(NORMAL);
  for(var i=0; i<maxCount +5; i+=5){
    var x = margin-20;
    y = map(i,0, maxCount,height-margin, margin);
    stroke(0);
      textFont(myFont);
    fill(255);
    text(i, x, y+5);
    stroke(255);
    line(x+5,y,x+25,y);
  }
  //textStyle(ITALIC);
  noStroke();
  textFont(myFont);
  text("Number of neighborhoods\n(with at least 1 ecoroof)", margin-60,margin+400);


  // title
  textStyle(BOLD);
  textFont(myFont);
  noStroke();
  textAlign(LEFT);
  textSize(24);
  text("Most NYC neighbohoods only have 1 or 2 ecoroofs", margin,margin-80);
  textStyle(ITALIC);
  textFont(myFont);
  noStroke();
  textAlign(LEFT);
  textSize(12);
text("Ecoroof = green, blue and white roofs", margin, margin-60);

 


  }

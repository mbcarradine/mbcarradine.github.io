var circleX = 0;

function setup() {
 	createCanvas(600,600); 
    background(150,150,150);


}

function draw() {
  //background


//rectangle
  fill(255,circleX,0,50);
noStroke();
rect(circleX,circleX,20,20);
circleX=circleX + 10;

}

function mousePressed(){
    background(150,150,150);


}


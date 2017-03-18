var r = 0;
var b = 255;



function setup() {
 	createCanvas(600,600); 



}

function draw() {
  r= map(mouseX, 0, 600, 0, 255);
  b= map(mouseX, 0, 600, 255, 0);
background(r,0,b);

ellipse(mouseX, 50, 25, 25);


}

function mousePressed(){
    background(150,150,150);


}


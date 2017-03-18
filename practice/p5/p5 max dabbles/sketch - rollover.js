var x = 0;
var speed = 3;

function setup() {
 	createCanvas(600,600); 



}

function draw() {
background(50);

stroke(255);
strokeWeight(4);
noFill();



if (mouseX > 300 && mouseX <400 && mouseY >200 && mouseY<300){
  fill(255,0,200);
}
rect (300,200,100,100);

}

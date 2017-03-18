var x = 0;
var speed = 10;
var col = {
r: 255,
g: 0,
b: 0
};

function setup() {
 	createCanvas(600,600); 



}

function draw() {
  col.r = random(0,255);
  col.g = random(0,255);
  col.b = random(0,255);
background(50);
stroke(255);
strokeWeight(4);
ellipse(x, 200, 50,50);
if (x > width || x < 0){
speed = speed * -1;
fill(col.r,col.g,col.b);
}
x = x + speed



}

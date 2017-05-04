var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var score = 0;
var num = 10;

function setup() {
  createCanvas(600, 800);
  
   for (var i=0; i < num; i++) {
    x[i] = random(10, 600);
    y[i] = random(10, 800);
    xSpeed[i] = random(10, 10);
    ySpeed[i] = random(5, 5);
}
}

function draw() {
   background(150);
     for (var i=0; i<num; i++) {
    x[i] += xSpeed[i];
    y[i] += ySpeed[i];
    
   ellipse(x[i], y[i], 30, 30);
    fill('red');
    

  rect(mouseX, 790,100 , 10);
  fill('blue');
  textSize(32);
text(score, 10, 30);
fill(0, 102, 153);

  

    if (x <= 10 || x >= 590){
      xSpeed[i] *= -1;      

    }

    if (y <= 10){
      ySpeed[i] *= -1;
    }

if (y >= height-50 && x>mouseX && x <mouseX+200) {
  ySpeed[i] *= -1.2;
score = score + 1;
}
   if (y>= 795){
      score=0;
    }
 
}
}


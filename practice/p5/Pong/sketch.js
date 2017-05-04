var x = 0;
var y = 0;
var xSpeed = 0;
var ySpeed = 0;
var score = 0;

function setup() {
  createCanvas(600, 800);
  
    x = random(10, 600);
    y = random(10, 800);
    xSpeed = random(10, 10);
    ySpeed = random(5, 5);

}

function draw() {
   background(150);
   ellipse(x, y, 30, 30);
    fill('red');
    

  rect(mouseX, 790,100 , 10);
  fill('blue');
  textSize(32);
text(score, 10, 30);
fill(0, 102, 153);

  x+= xSpeed;
  y+= ySpeed;
  

    if (x <= 10 || x >= 590){
      xSpeed *= -1;      

    }

    if (y <= 10){
      ySpeed *= -1;
    }

if (y >= height-50 && x>mouseX && x <mouseX+200) {
  ySpeed *= -1.2;
score = score + 1;
}
   if (y>= 795){
      score=0;
    }
 
}


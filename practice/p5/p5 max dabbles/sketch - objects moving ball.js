//declaring an object
var circle = {
x : 0,
y : 50,
diameter: 50

};
//another one why not
var circle2 = {
x : 0,
y : 100,
diameter: 100
};


function setup() {
 	createCanvas(600,600); 



}

function draw() {
background(50, 50, 50);

ellipse(circle.x, circle.y, circle.x,circle.x);
circle.x = circle.x + 10;




}

function mousePressed(){
    background(150,150,150);


}


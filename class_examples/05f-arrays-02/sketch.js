// Adapted from Learning Processing by Dan Shiffman

// keep track of the mouse position in an array
// write the history of mouse positions into the array
// if there's more than 50 items, delete the first one

var xPos = []; 

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(255);
  
  // New location
  append(xPos, mouseX);// Update the last spot in the array with the mouse location.

  // Never allow the array to get larger than 50 items
  if (xPos.length > 50) {
  	// If it is, delete the first item
    xPos.splice(0,1);
  }
  
  // Draw everything
  for (var i = 0; i < xPos.length; i++) {
     // Draw an ellipse for each element in the arrays. 
     // Color and size are tied to the loop's counter: i.
    noStroke();
    // fill(255-i*5);
    fill(200, 50);
    rect(xPos[i],0,20,height);
  }
}
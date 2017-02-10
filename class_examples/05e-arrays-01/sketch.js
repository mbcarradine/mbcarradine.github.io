// write an array that contains 3 words
// write an array that contains 5 numbers
// write an empty array 
// fill the empty array with 20 numbers that range from 0 to width
// output all the numbers within the array
// draw a rectangle for each of the numbers on the screen
// EXTRA: Make each of the rectangles interact with the mouse in a different way
  
var words = ["cat", "dog", "bird"];
var listOfNumbers = [2, 3, 5, 7, 11];
var numbers = [];

function setup() {
  createCanvas(500,500);

  console.log(words[2]);
  append(words, "mouse");

  console.log(listOfNumbers[3]);

  for(var i=0; i<20; i++){
    append(numbers, map(i, 0, 19, 0, width));    
  }

  for(var i=0; i<numbers.length; i++){
    console.log("at position " + i + "the value is: " + numbers[i]);
  }

}


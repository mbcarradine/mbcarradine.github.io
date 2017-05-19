
var n = 2000;

var nodes = d3.range(n).map(function(i) {
  return {
    index: i,
    color: i < 200 ? "red" : "gray"
  };
});

var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = 700,
    height = 500;

var simulation = d3.forceSimulation(nodes)
    .force("y", d3.forceY())
    .force("red", isolate(d3.forceX(-width/8), function(d) { return d.color === "red"; }))
    .force("gray", isolate(d3.forceX(width/6), function(d) { return d.color === "gray"; }))
    .force("charge", d3.forceManyBody().strength(-1))
    .on("tick", ticked)



function ticked() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 5, height / 3);
  nodes.forEach(drawNode);
  context.restore();
  context.fillStyle = "black";
context.fillText("No AC",10,150);
context.font = "28px Helvetica";
  context.fillStyle = "black";
context.fillText("Has AC",275,150);
context.font = "28px Helvetica";
}

function drawNode(d) {
  context.beginPath(d.x + 120, d.y);
  context.moveTo(d.x + 10, d.y);
  context.arc(d.x, d.y, 2.2, 10, 10 * Math.PI);
  context.fillStyle = d.color;
  context.fill();
}


function isolate(force, filter) {
  var initialize = force.initialize;
  force.initialize = function() { initialize.call(force, nodes.filter(filter)); };
  return force;
}
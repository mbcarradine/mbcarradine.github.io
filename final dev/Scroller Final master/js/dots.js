
var n = 2000;

var nodes = d3.range(n).map(function(i) {
  return {
    index: i,
    color: i < 250 ? "red" : "gray"
  };
});

var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = 600,
    height = 400;

var simulation = d3.forceSimulation(nodes)
    .force("y", d3.forceY())
    .force("red", isolate(d3.forceX(-width/12), function(d) { return d.color === "red"; }))
    .force("gray", isolate(d3.forceX(width/12), function(d) { return d.color === "gray"; }))
    .force("charge", d3.forceManyBody().strength(-1))
    .on("tick", ticked)

    // d3.select(canvas)
    // .call(d3.drag()
    //     .container(canvas)
    //     .subject(dragsubject)
    //     .on("start", dragstarted)
    //     .on("drag", dragged)
    //     .on("end", dragended));

function ticked() {
  context.clearRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  nodes.forEach(drawNode);
  context.restore();
}

function drawNode(d) {
  context.beginPath();
  context.moveTo(d.x + 2, d.y);
  context.arc(d.x, d.y, 2, 0, 3 * Math.PI);
  context.fillStyle = d.color;
  context.fill();
}
function dragsubject() {
  return simulation.find(d3.event.x, d3.event.y, radius);
}
function isolate(force, filter) {
  var initialize = force.initialize;
  force.initialize = function() { initialize.call(force, nodes.filter(filter)); };
  return force;
}
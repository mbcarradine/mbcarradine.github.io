
var width = 960,
    height = 500;

var nodes = [];

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .charge(-10)
    .size([width, height])
    .nodes(nodes)
    .on("tick", tick)
    .start();

function tick() {
  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

var interval = setInterval(function() {
  var d = {
    x: width / 2 + 2 * Math.random() - 1,
    y: height / 2 + 2 * Math.random() - 1
  };
    // svg.append("text")
    // .attr("x", 400)
    // .attr("y", 200)
    // .text("118,000 Seniors in NYC live without AC")
    // //.style ("fill","#4599ac");

svg.append("text")
.attr("x", 380)
    .attr("y", 200)
        .style("font-size", "40px") 
        //.style("text-decoration", "underline")  
        .text("117,000");

  svg.append("circle")
      .data([d])
      .attr ("r", 1)
      .attr("fill","red")
    .transition()
      .ease(Math.sqrt)
      .attr("r", 3);



  if (nodes.push(d) > 117000) clearInterval(interval);
  force.start();
}, 1);

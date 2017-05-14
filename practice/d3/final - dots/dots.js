var width = 600,
    height = 400;

var nodes = [];

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.forceSimulation()
    .force("collide", d3.forceCollide(400))
    // .force("center", d3.forceCenter(width / 2, height / 2))

    .nodes(nodes)
    .on("tick", tick);


// var force = d3.layout.force()
//     .charge(-5)
//     .size([width, height])
//     .nodes(nodes)
//     .on("tick", tick)
//     .start(); 

function tick() {
  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

//var interval = setInterval(function() {

  var d = {
    x: width / 2 + 2 * Math.random() - 1,
    y: height / 2 + 2 * Math.random() - 1
  };

  console.log(width / 2 + 2 * Math.random() - 1)


svg.append("text")
.attr("x", 380)
    .attr("y", 200)
        .style("font-size", "40px")  
        .text("117,000");

  // svg.append("circle")
  //     .data([d])
  //     .attr ("r", 10)
  //     .attr("fill","red")
  //        .attr('cx', function(d){ 
  //         d.max = Math.random();
  //         console.log(d);

  //         //return
  //       })
  //       .attr('cy', function(d){ 
  //         //return d.Math.random();
  //       })
  //   .transition()
  //     .ease(Math.sqrt)
  //     .attr("r", 20)
      // .attr('transform', 'translate(300,300)');

  // if (nodes.push(d) > 117000) clearInterval(interval);
    

    for(var i = 0; i < 10; i++) {
      nodes.push(d);
    }

    console.log(nodes)
     

   // force.start();
// }, 1);

// clearInterval(interval);
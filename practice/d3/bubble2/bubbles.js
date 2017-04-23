(function() {
  var width = 1200,
  height = 900;
var svg = d3.select("#chart")
.append("svg")
.attr("height", height)
.attr("width", width)
.append("g")
.attr("transform", "translate(0,0)")

var radiusScale = d3.scaleSqrt().domain([1, 300]).range([10, 80])

var simulation = d3.forceSimulation()
.force("x", d3.forceX(width / 1).strength(0.01))
.force("y", d3.forceY(height / 1).strength(0.01))
.force("collide", d3.forceCollide(function(d){
	return radiusScale(d.Ratio) +1 ;

}))

d3.queue()
.defer(d3.csv,"cooldata.csv")
.await(ready)

function ready (error, datapoints) {

  var circles = svg.selectAll(".name")
      .data(datapoints)
      .enter().append("circle")
      .attr("class", "name")
      .attr("r", function(d) {
      	return radiusScale(d.Ratio)
      })
      .attr("fill", function(d) {
        return radiusScale(d.MRR)
      })
      .on('click', function(d) {
      	console.log(d)

      })


    simulation.nodes(datapoints)
    .on('tick', ticked)

    function ticked(){
    	circles
    		.attr("cx", function(d) {
    			return d.x
    		})
    		.attr("cy", function(d) {
    			return d.y
    		})

    }



}



})();
(function() {
  var width = 1200,
  height = 900;
var svg = d3.select("#chart")
.append("svg")
.attr("height", height)
attr("width", width)
append("g")
.attr("transform", "translate(0,0)")

d3.queue()
.defer(cooldata.csv,"cooldata.csv")
.await(ready)

function ready (error, datapoints( {

  var circles= svg.selectAll(".artist")
      .data(datapoints)
      .enter().append("circle")
      .attr("class", "artist")
      .attr("r", 10)
      .attr("fill", "lightblue")

}



})();
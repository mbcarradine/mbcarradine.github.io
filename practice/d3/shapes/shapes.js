var dataArray = [5, 11, 15];
var textArray = ['hi','welcome!','farewell'];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect")
.data(dataArray)
.enter().append("rect")
	.attr("height",function(d,i){ return d*15; })
	.attr("width","50")
	.attr("fill","blue")

	.attr("x",function (d,i){ return 60*i;})
	.attr("y",function(d,i){ return 300-(d*15); });

 
var newX = 300;
svg.selectAll("circle.first")
.data(dataArray)
.enter().append("circle")
	.attr("fill","red")
		.attr("class","first")
		.attr("cx",function(d,i){ newX+=(d*5) + (i*10) ; return newX; })
		.attr("cy","100")
		.attr("r",function(d,i){ return d*3; });

/* 
var newX = 600;
svg.selectAll("circle.second")
.data(dataArray)
.enter().append("circle")
		.attr("class","second")
		.attr("cx",function(d,i){ newX+=(d*5) + (i*10) ; return newX; })
		.attr("cy","100")
		.attr("r",function(d,i){ return d*3; });
		*/

var newX = 600;
svg.selectAll("ellipse")
.data(dataArray)
.enter().append("ellipse")
	.attr("fill","gray")
		.attr("class","second")
		.attr("cx",function(d,i){ newX+=(d*5) + (i*10) ; return newX; })
		.attr("cy","100")
		.attr("rx",function(d,i){ return d*3; })
		.attr("ry","30");


var newX = 300;
svg.selectAll("line")
.data(dataArray)
.enter().append("line")
	 .style("stroke","green")
	 	.attr("stroke","gray")
		.attr("stroke-width","2")
		.attr("x1", newX)
		.attr("y1",function(d,i) {return 200+(i*20); })
		.attr("x2",function(d,i) { return newX+(d*15); })
		.attr("y2",function(d,i) {return 200+(i*20); });

svg.append("text").selectAll("tspan")
.data(textArray)
.enter().append("tspan")
	.attr("x","1")
	.attr("y",function(d,i) {return 400+(i*20); })
	.attr("fill","blue")
		.attr("stroke","none")
			.attr("text-anchor","start")
				.attr("dominant-baseline","middle")
	.attr("font-size","20")
	.text(function(d){return d;});

	// var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
 //               	 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
 // 	              { "x": 80,  "y": 5},  { "x": 100, "y": 60}];
 	              


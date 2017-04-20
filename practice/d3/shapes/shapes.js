var dataArray = [5, 11, 18];
var dataDays = ['Mon','Wed','Fri'];

var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0,3]);
var rainbowCircles = d3.scaleSequential(d3.interpolateRainbow).domain([4,8]);


var x = d3.scaleBand()
		  .domain(dataDays)
		  .range([0, 170]) //pixel range
		  .paddingInner(0.1176);

var xAxis = d3.axisBottom(x);

var cat20 = d3.schemeCategory20;

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect")
.data(dataArray)
.enter().append("rect")
	.attr("height",function(d,i){ return d*15; })
	.attr("width","50")
	.attr("fill",function(d,i){ return rainbow(i) })

	.attr("x",function (d,i){ return 60*i;})
	.attr("y",function(d,i){ return 300-(d*15); });
svg.append("g")
	.attr("class","x axis hidden")
	.attr("transform","translate(0,300)")
	.call(xAxis);

var newX = 300;
svg.selectAll("circle.first")
.data(dataArray)
.enter().append("circle")
	.attr("fill",function(d,i){ return rainbowCircles(i) })
		.attr("class","first")
		.attr("cx",function(d,i){ newX+=(d*5) + (i*10) ; return newX; })
		.attr("cy","100")
		.attr("r",function(d,i){ return d*3; });

var newX = 600;
svg.selectAll("ellipse")
.data(dataArray)
.enter().append("ellipse")
		.attr("class","second")
		.attr("fill",function(d,i){return cat20[i]; })
		.attr("cx",function(d,i){ newX+=(d*3) + (i*20) ; return newX; })
		.attr("cy","100")
		.attr("rx",function(d){ return d*3; })
		.attr("ry","30");
		

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
 	              


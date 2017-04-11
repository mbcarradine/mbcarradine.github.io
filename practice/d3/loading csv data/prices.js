var parseDate = d3.timeParse("%m/%d/%Y"); //uppercase Y means 4digit yr value. using slashes bc that's how the dates are formatted. if hypehnated then use hyphens instead

d3.csv("prices.csv")
	.row(function(d) { return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))}; }) //passing the month, and taking string price but turning into number, trim space, remove first character 
	.get(function(error,data){ //error is the variable name if it can't return the file, data is the same but for... data
//setting height and width
var height = 300;
var width = 500;
//finding mins and max
var max = d3.max(data, function(d){ return d.price; });
var minDate = d3.min(data,function(d){ return d.month; });
var maxDate = d3.max(data,function(d){ return d.month; });

//setting scales
var y = d3.scaleLinear()
		.domain([0,max])
		.range([height,0]);

var x = d3.scaleTime()
		.domain([minDate,maxDate])
		.range([0,width]);

//define axis
var yAxis = d3.axisLeft(y);
var xAxis = d3.axisBottom(x);

var svg = d3.select ("body").append("svg").attr("height","100%").attr("width","100%");
//set margin
var margin = {left:50, right: 50, top:40, bottom:0};

//adding elements into a group
var chartGroup = svg.append("g")
					.attr("transform","translate("+margin.left+","+margin.top+")");

//define line generator and apply scale
var line = d3.line()
			.x(function(d) { return x(d.month); })
			.y(function(d){ return y(d.price); });

chartGroup.append("path").attr("d",line(data));
//add axes
chartGroup.append("g").attr("class","x axis").attr("transform","translate(0,"+height+")").call(xAxis);
chartGroup.append("g").attr("class","y axis").call(yAxis);


})


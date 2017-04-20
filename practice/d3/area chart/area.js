var dataArray = [25, 26, 27, 28, 35, 40, 42, 47, 60, 75, 90, 103, 110, 115, 125, 150, 180];
var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
var parseDate = d3.timeParse("%Y");


//console.log(d3.extent(dataYears,function(d) {return parseDate(d);}));


var height = 200;
var width = 500;

var margin = {left:50,right:50,top:40,bottom:0};

//setting the scale
var y = d3.scaleLinear()
		.domain([0,d3.max(dataArray)])
		.range([height,0]);


var x = d3.scaleTime()
		   .domain(d3.extent(dataYears,function(d) {return parseDate(d);}))
		   .range([0,width])

//make the y axis, every 3rd tick shows
var yAxis = d3.axisLeft(y).ticks(3).tickPadding(10).tickSize(10);
var xAxis = d3.axisBottom(x);


var area = d3.area()
			.x(function(d,i){ return x(parseDate(dataYears[i])); }) //using the index and setting location of area chart x
			.y0(height) //setting location of lower line. constant
			.y1(function(d) { return y(d); }); //setting location of top line. drawing upper boundary of area chart

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%").attr("fill","blue");
var chartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")");

chartGroup.append("path").attr("d",area(dataArray));
chartGroup.append("g").attr("class","axis y").call(yAxis);
chartGroup.append("g").attr("class","axis x")
						.attr("transform","translate(0,"+height+")")
						.call(xAxis);



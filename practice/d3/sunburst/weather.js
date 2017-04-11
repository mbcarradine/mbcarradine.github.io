var dataHighs = [590, 630, 590, 630, 510];
//var dataDays = ['1','2','3','4','5'];

var height = 800;
var width = 600;

var area = d3.area()
			.x(function(d,i){ return i*200; }) //using the index, multiplying by 20 to create space between data pts
			.y0(height) //setting location of lower line. constant
			.y1(function(d) { return height-d;}); //setting location of top line. drawing upper boundary of area chart

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");
svg.append("path").attr("d",area(dataHighs));

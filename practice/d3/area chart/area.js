var dataArray = [25, 26, 27, 28, 35, 40, 42, 47, 60, 75, 90, 103, 110, 120, 125, 130, 170];
var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];

var height = 200;
var width = 500;

var area = d3.area()
			.x(function(d,i){ return i*20; }) //using the index, multiplying by 20 to create space between data pts
			.y0(height) //setting location of lower line. constant
			.y1(function(d) { return height-d;}); //setting location of top line. drawing upper boundary of area chart

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");
svg.append("path").attr("d",area(dataArray));

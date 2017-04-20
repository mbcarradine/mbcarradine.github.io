var height = 200;
var width = 500;
var margin = {left: 50, right: 50, top:40, bottom: 0};

var tree = d3.tree().size([width, height]);

var svg = d3.select('body').append('svg').attr('width','100%').attr('height','100%');
var chartGroup = svg.append('g').attr('transform','translate('+margin.left+','+margin.top+')');
//bring in the data

d3.json('treeData.json').get(function(error,data){
console.log(data[0]);

//running this next line of code apparently formats the json into some d3-friendly hierarchical scheme. wouldn't use this for a csv. d3.stratify function?
var root = d3.hierarchy(data[0]);
tree(root);
chartGroup.selectAll("circle")
	.data(root.descendants())
	.enter().append("circle")
	.attr("cx",function(d){ return d.x })
	.attr("cy",function(d){ return d.y })
	.attr("r","5")


//we use slice 1 because we always need once less line than dot. 
chartGroup.selectAll("path")
	.data(root.descendants().slice(1))
	.enter().append("path")
	.attr("class","link") //i'm not sure why she did this
	.attr("d", function (d){ return "M"+d.x+","+d.y+"L"+d.parent.x+","+d.parent.y; });



});

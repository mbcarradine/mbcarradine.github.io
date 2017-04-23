var width=1150, height=500, 
sideSquare = 10, popInOneSquare, totalPop=0, 
svgContainer;

var data;

var setup = function(callback){
    svgContainer = d3.select("body").append("svg")
                                .attr("width", width)
                                .attr("height", height);
    d3.json("data.json",function(resp){
        data = resp;
        for(var bur in data){
            totalPop += parseInt(data[bur]["total"]);
        }
        popInOneSquare = parseInt((totalPop/(width*height))*100);
        callback();
    })
}

var drawPopulation = function(pop,color){
    var grp = svgContainer.append("g");
    var x=0,y=0;
    d3.range(parseInt(pop/popInOneSquare)).forEach(function(i) {
        if(y>height){
            x=x+sideSquare;
            y=0;
        }
        grp.append("rect")
                    .attr("x",x)
                    .attr("y",y)
                    .attr("width",sideSquare-1)
                    .attr("height",sideSquare-1)
                    .style('fill',color || "#000000")
                    .style("fill-opacity",0)
                    .transition()
                    .duration(2000)
                    .style("fill-opacity",1)
        y=y+sideSquare;
    });
    return grp;
}

setup(function(){
    var totalPopGrp = drawPopulation(totalPop),burGrp;
    d3.selectAll(".btn").on("click",function(){
        var val = d3.select(event.target).html();
        totalPopGrp.selectAll("*").transition().duration(1000).style("fill-opacity",0.1);
        if(burGrp) burGrp.selectAll("*").remove();
        if(val == 1){
           burGrp  = drawPopulation(data["manhattan"]["total"],data["manhattan"]["color"]);
        }
        else if(val == 2){
            burGrp = drawPopulation(data["bronx"]["total"],data["bronx"]["color"]);
        }
    })
    
})
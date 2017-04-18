//Setup function to:
// 1. create svg container
// 2. load json
// 3. define total population
// 4. population in one square
var width = window.innerWidth*.8;
var height = window.innerHeight*.6;
var svgContainer;
var data, totalPopulation=0, populationSquare, sideSquare=10;

var setup = function(callback){
    svgContainer = d3.select("body").append("svg")
                     .attr("width",width)
                     .attr("height",height);
    d3.json("data.json",function(resp){
        data = resp;
        for(var bur in data){
            totalPopulation += parseInt(data[bur]["total"]);
        }
        var areaSquare = sideSquare*sideSquare;
        populationSquare = parseInt((totalPopulation/(width*height))*areaSquare);
        console.log(totalPopulation +"--"+populationSquare);
        callback();
    })
}
var x=0,y=0;
var drawPopulation = function(pop,color){
    d3.range(parseInt(pop/populationSquare)).forEach(function(i){
        if(y>height){
            y=0;
            x=x+sideSquare;
        }
         svgContainer.append("rect")
                     .attr("x",x)
                     .attr("y",y)
                     .attr("width",sideSquare-1)
                     .attr("height",sideSquare-1)
                     .style("fill",color)
                     .style("fill-opacity",0)
                     .transition()
                     .delay(i*1)
                     .duration(1)
                     .style("fill-opacity",1)
         y=y+sideSquare;
    })
}
      
setup(function(){
    //When setup is complete
    drawPopulation(totalPopulation,"#888888");
    x=0;
    y=0;
    d3.selectAll(".btn").on("click",function(){
        //alert("hey");
        var val = d3.select(event.target).html();
        if(val=="man"){
            drawPopulation(data["manhattan"]["total"],data["manhattan"]["color"]);
        }else if(val=="bx"){
            drawPopulation(data["bronx"]["total"],data["bronx"]["color"]);
                    }else if(val=="bk"){
            drawPopulation(data["brooklyn"]["total"],data["brooklyn"]["color"]);
                    }else if(val=="qn"){
            drawPopulation(data["queens"]["total"],data["queens"]["color"]);
                    }else if(val=="si"){
            drawPopulation(data["staten island"]["total"],data["staten island"]["color"]);
        }
    })
});      

// Drawing population
// 1. append group element
// 2. loop over till population count
// 3. append rect for number of square for a particular population
// 4. return group element

// Start
// 1. call setup
// 2. draw initial total population
// 3. assign click events
// 4. in click event draw burough population

var lat, long, rooftype, table, myMap;


function preload(){
  table = loadTable("data/allroofswLL.csv", "csv", "header");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

// LEAFLET CODE

mymap = L.map('mapid').setView([40.753569, -73.882988], 11);
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWJjYXJyYWRpbmUiLCJhIjoiY2l6ZWxmeGh6MjJicjJ2cW9ncDh3ZzVpMiJ9.QMaUpzAhGuRXJZcP9-TtdQ', {
  maxZoom: 14,
  id: 'mapbox.streets'
  }).addTo(mymap);
  drawDataPoints();
}

function drawDataPoints(){




  lat = table.getColumn("Latitude");
    long = table.getColumn("Longitude");
    rooftype = table.getColumn("Roof");
    address = table.getColumn("Address");

    for(var i=0; i<500; i++){
      var col = 'olivedrab';
      if(rooftype[i]==="Cool"){
        col = 'white';
      }else if(rooftype[i]==="Blue"){
        col= 'deepskyblue';
      }

      var circle = L.circle([lat[i], long[i]], {
        radius: 150,
        stroke: false,
        fillColor: col,
        fillOpacity: 0.4
      }).addTo(mymap)
      .bindPopup(address[i] + ": " + rooftype[i]+" Roof");
  }
}



function draw() {
    textSize(12);
fill ('olivedrab');
rect (25,200,10,10);
text ("green roof", 40, 210);
fill ('white');
rect (25,225,10,10);
text ("cool roof (white)", 40, 235);
fill ('deepskyblue');
rect (25, 250,10,10);
text ("blue roof", 40, 260);

}


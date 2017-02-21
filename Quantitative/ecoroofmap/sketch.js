var lat, long, rooftype, table, myMap;


function preload(){
  table = loadTable("data/allroofswLL.csv", "csv", "header");
  //myFont = loadFont("Gotham-Black.otf");
}

function setup() {

// LEAFLET CODE
// create your own map
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
  // cycle through array
  //console.log(latitudes[0]);
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
        fillOpacity: 0.5
      }).addTo(mymap)
      .bindPopup(address[i] + ": " + rooftype[i]+" Roof");
  }
}



function draw() {
}


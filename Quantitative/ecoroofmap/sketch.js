var lat, long, rooftype, table, myMap


function preload(){
  table = loadTable('data/allroofswLL.csv', 'csv', 'header');
  //myFont = loadFont("Gotham-Black.otf");
}

function setup() {

// LEAFLET CODE
// create your own map
mymap = L.map('mapid').setView([40.763801, -73.980121], 14);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
  maxZoom: 18,
  id: 'mapbox.streets'
  }).addTo(mymap);
  drawDataPoints();
}

function drawDataPoints(){

  lat = table.getColumn("Latitude");
    long = table.getColumn("Longitude");
    rooftype = table.getColumn("Roof");
  // cycle through array
  console.log(latitudes[0]);
    for(var i=0; i<500; i++){
      var col = 'white';
      if(rooftype[i]==="cool" || conditions[i]==="green"){
        col = 'green';
      }else if(conditions[i]==="blue"){
        col= 'blue';
      }

      var circle = L.circle([lat[i], long[i]], {
        radius: 20,
        stroke: false,
        fillColor: col,
        fillOpacity: 0.5
      }).addTo(mymap)
      .bindPopup("Roof: " + rooftype[i]);
  }
}



function draw() {
}


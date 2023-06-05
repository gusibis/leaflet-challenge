function createMap(earthquake) {
    // console.log(earthquake);
    // Create the tile layer that will be the background of our map.
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Create a baseMaps object to hold the streetmap layer.
    let baseMaps = {
      "EarthQuake Map": streetmap
    };

    // Create an overlayMaps object to hold the bikeStations layer.
    let overlayMaps = {
      "Earthquakes": earthquake
    };

    // Create the map object with options.
    let myMap = L.map("map", {
      center: [40.73, -74.0059],
      zoom: 3,
      layers: [streetmap, earthquake]
    });

    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);
    /*Legend specific*/ //https://codepen.io/haakseth/pen/KQbjdO good help to add the 
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function(map) {
        var div = L.DomUtil.create("div", "legend");
        div.innerHTML += "<h2>DEPTH<br>Kilometers</h2>";
        // div.innerHTML += "<h5>Kilometers</h5>";
        div.innerHTML += '<i style="background: #f54522"></i><span>GREATER THAN 90</span><br>';
        div.innerHTML += '<i style="background: #f2b95e"></i><span>71 - 90</span><br>';
        div.innerHTML += '<i style="background: #ebf25e"></i><span>51 - 70</span><br>';
        div.innerHTML += '<i style="background: #c3f25e"></i><span>31 - 50</span><br>';
        div.innerHTML += '<i style="background: #368f6e"></i><span>11 - 30</span><br>';
        div.innerHTML += '<i style="background: #42f5b3"></i><span>10 OR LESS</span><br>';
        return div;
    };
        legend.addTo(myMap);
  }

function chooseColor(depth) {
  if(depth > 90){
    col = "#f54522";
  }else if(depth > 70 && depth <=90){
    col = "#f2b95e";
  }else if(depth > 50 && depth <=70){
    col = "#ebf25e";
  }else if(depth > 30 && depth <=50){
    col =  "#c3f25e";
  }else if(depth >= 10 && depth <=30){
    col =  "#368f6e";
  }else if(depth < 11){
    col =  "#42f5b3";
  }
  return(col);
  // console.log(col + " depth: " + depth) ;
};

function createMarkers(response) {
  console.log(response);
  var eq = L.layerGroup();
  let earthquakes = response.features;
  for (let index = 0; index < earthquakes.length; index++) {
    console.log(index);
    console.log(earthquakes[index]);
  }
    L.geoJSON(earthquakes, {
      pointToLayer: function (feature, latlng) {
        // console.log(feature.properties.mag);
        return L.circleMarker(latlng, 
          {
            radius: feature.properties.mag * 3,
            fillColor: chooseColor(feature.geometry.coordinates[2]),
            fillOpacity: 0.8,
            color: "black",
            stroke: true,
            weight: 0.5
          }
        )
  
      },
      
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>Location: " + feature.properties.place + "</h3><hr><p>Date: " + new Date(feature.properties.time) 
        + "</p><hr><p>Magnitude: " + feature.properties.mag + "</p><p>Depth: " +feature.geometry.coordinates[2] +"</p>");
      }
      
    }).addTo(eq);
  createMap(eq);
};



// Perform an API call to the usgs.gov Call createMarkers when it completes.
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson").then(createMarkers);
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson").then(createMarkers); // 




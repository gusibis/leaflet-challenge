# leaflet-challenge<br>
Challenge 15 leaflet-challenge<br><br>

The instructions for this activity are broken into two parts:<br>
    - Part 1: Create the Earthquake Visualization<br>
    - Part 2: Gather and Plot More Data (Optional with no extra points earning) <br>
        The link https://github.com/fraxen/tectonicplatesLinks returns 404<br>
        The second part was not completed in this challenge. <br><br>

1: Create the Earthquake Visualization<br>
    Your first task is to visualize an earthquake dataset. Complete the following steps:<br>
    1. Get your dataset. To do so, follow these steps:<br>
    - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php page and choose a dataset to visualize.<br> 
    - When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization.<br><br>
    2. Import and visualize the data by doing the following:<br>
    - Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.<br>
        a. Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color.
           Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.<br>
        b. The depth of the earth is found in response.geometry.coordinates[2]<br>
    - Include popups that provide additional information about the earthquake when its associated marker is clicked.<br>
    - Create a legend that will provide context for your map data. I used https://codepen.io/haakseth/pen/KQbjdO as a reference to create the legend. <br><br>
The site hosted by Github can be found here<br>
https://gusibis.github.io/leaflet-challenge/


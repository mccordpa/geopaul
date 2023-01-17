var test = $()

if($(".selectMenu[data-rel='productsMenuItem']").hasClass("active")){
    console.log("products is active")

    //Places Lived Map
    var livedMap = L.map("placesLivedMap").setView([42.000, -81.500], 5);

    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 5,
        maxZoom: 11,
        ext: 'jpg'
    }).addTo(livedMap);

    //Location markers
    var cantonMarker = L.marker([42.3086, -83.4821]).addTo(livedMap);
    var ioniaMarker = L.marker([42.9873, -85.0711]).addTo(livedMap);
    var eastLansingMarker = L.marker([42.7370, -84.4839]).addTo(livedMap);
    var grandRapidsMarker = L.marker([42.9634, -85.6681]).addTo(livedMap);
    var bloomingtonMarker = L.marker([39.1653, -86.5264]).addTo(livedMap);
    var baltimoreMarker = L.marker([39.2904, -76.6122]).addTo(livedMap);
    var howellMarker = L.marker([42.6073, -83.9294]).addTo(livedMap);

    //Popups
    ioniaMarker.bindPopup("<table style='font-size: 12px; width:150px'><tr><th>City and State</th><td>Ionia, MI</td></tr><tr><th>Period Here</th><td>1982-2001</td></tr><tr><th>Add'l Notes</th><td>I grew up here</td></tr></table>")
    eastLansingMarker.bindPopup("<table style='font-size: 12px; width:175px'><tr><th>City and State</th><td>East Lansing, MI</td></tr><tr><th>Period Here</th><td>2001-2006,<br>2009-2012</td></tr><tr><th>Add'l Notes</th><td>Go Green!!</td></tr></table>")
    grandRapidsMarker.bindPopup("<table style='font-size: 12px; width:175px'><tr><th>City and State</th><td>Grand Rapids, MI</td></tr><tr><th>Period Here</th><td>2006-2007</td></tr><tr><th>Add'l Notes</th><td>Prez Ford was raised here</td></tr></table>")
    baltimoreMarker.bindPopup("<table style='font-size: 12px; width:150px'><tr><th>City and State</th><td>Baltimore, MD</td></tr><tr><th>Period Here</th><td>2007-2009</td></tr><tr><th>Add'l Notes</th><td>Great crab cakes</td></tr></table>")
    bloomingtonMarker.bindPopup("<table style='font-size: 12px; width:150px'><tr><th>City and State</th><td>Bloomington, IN</td></tr><tr><th>Period Here</th><td>2012-2017</td></tr><tr><th>Add'l Notes</th><td>Best IN city</td></tr></table>")
    howellMarker.bindPopup("<table style='font-size: 12px; width:150px'><tr><th>City and State</th><td>Howell, MI</td></tr><tr><th>Period Here</th><td>2017-2019</td></tr><tr><th>Add'l Notes</th><td>Good running routes</td></tr></table>")
    cantonMarker.bindPopup("<table style='font-size: 12px; width:150px'><tr><th>City and State</th><td>Canton, MI</td></tr><tr><th>Period Here</th><td>2019-Pres</td></tr><tr><th>Add'l Notes</th><td>30 miles to Detroit</td></tr></table>")


    //Kenya Map

    // Add AJAX request for data
    var kenyaData = $.ajax({
        url:"https://raw.githubusercontent.com/mccordpa/geoData/master/kenya.geojson",
        dataType: "json",
        success: console.log("WP data successfully loaded."),
        error: function (xhr) {
          alert(xhr.statusText)
        }
    })

    //Specify that this code should run once the Kenya GIS data request is complete
    $.when(kenyaData).done(function(){

        var kenyaMap = L.map("kenyaMap").setView([0.05 , 37.27], 20);

        var basemap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
            minZoom: 5,
            attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(kenyaMap);


        //Add request to map
        var cwpLocations = L.geoJSON(kenyaData.responseJSON, {
            
            

            style: function(feature){
                var calcColor = (feature.properties.WRUA)
                if(calcColor == "Nanyuki"){
                    var wruaColor = "#2ffa39"
                } else if(calcColor == "Likii"){
                    var wruaColor = "#fa472f"
                } else if(calcColor == "Ngusishi"){
                    var wruaColor = "#2f73fa"
                } else if(calcColor == "Timau"){
                    var wruaColor = "#fa2fec"
                } else {
                    var wruaColor = "#f7fa2f"
                }

                return{
                    color: wruaColor
                }
            },
            pointToLayer: function(feature, latlng){
                return new L.CircleMarker(latlng, {
                    radius: 7,
                    fillOpacity: 0.6,
                    weight: 2
                })
            },
            onEachFeature: function(feature, layer){
                layer.bindPopup("<table style='font-size: 14px; width: 250px;'><tr><th>Water Project Name</th><td>" + feature.properties.wpName + "</td><tr><tr><th>WRUA Name</th><td>" + feature.properties.WRUA + "</td><tr></table>")
            }
        })

        console.log(cwpLocations)
        kenyaMap.addLayer(cwpLocations)
        /*
        console.log("cwp locations", cwpLocations)

        var geojsonMarkerOptions = {
            radius: 20,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 0.5,
            fillOpacity: 0.8
        };

        
        L.geoJson(cwpLocations, {
            pointToLayer: function(feature, latlng){
                return new L.circleMarker(latlng, geojsonMarkerOptions);
            }
        }).addTo(kenyaMap);*/

    })


    //CO2 Map
    var stateCO2;

    // Add AJAX request for data
    var co2Data = $.ajax({
        url:"https://raw.githubusercontent.com/mccordpa/geoData/master/CO2_state",
        dataType: "json",
        success: console.log("CO2 data successfully loaded."),
        error: function (xhr) {
          alert(xhr.statusText)
        }
    })

    //Specify that this code should run once the CO2 GIS data request is complete
    $.when(co2Data).done(function(){

        var mapboxTokenStateCO2 = "pk.eyJ1IjoicGF1bGZtY2NvcmQiLCJhIjoiY2tkN2phcGJyMnJhZDJ1cXl5dGEzbXp3NCJ9.8KduhExvSdrfUp2UUKmr2A"
        var co2Map = L.map("co2Map").setView([37.8 , -96.7026], 4);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxTokenStateCO2, {
            id: 'mapbox/light-v9',
            attribution: "",
            tileSize: 512,
            minZoom: 2,
            zoomOffset: -1
        }).addTo(co2Map);

        //Assign color according to CO2 Emissions / Density
        function getColorDens(d){
            return d > 85.01 ? '#990000' :
                    d > 28.5047  ? '#D7301F' :
                    d > 19.7952  ? '#EF6548' :
                    d > 14.411  ? '#FC8D59' :
                    d > 11.4961   ? '#FDBB84' :
                    d > 9.414   ? '#FDD49E' :
                                '#FEF0D9';
        }

        /*
        //Assign color according to CO2 Emissions / Density
        function getColorDens(d){
            return d > 360.9 ? '#800026' :
                    d > 176.96  ? '#BD0026' :
                    d > 123.2  ? '#E31A1C' :
                    d > 78.7  ? '#FC4E2A' :
                    d > 38.57   ? '#FD8D3C' :
                    d > 2.63   ? '#FEB24C' :
                                '#FFEDA0';
        }*/

        //Styling for CO2 Emissions / Density
        function styleDens(feature){
            return{
                fillColor: getColorDens(feature.properties.CarbonDens),
                weight: 2,
                opacity: 0.7,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            }
        }

        //Adding map interaction - Highlighting hovered states
        function highlightFeature(e){
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: "black",
                opacity: 0.5,
                dashArray: '',
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge){
                layer.bringToFront();
            }
            info.update(layer.feature.properties);

        }

        //Removing highlighting on mouseout
        function resetHighlight(e){
            stateCO2.resetStyle(e.target)
            info.update();
        }

        //Zoom to state on click
        function zoomToFeature(e){
            co2Map.fitBounds(e.target.getBounds())
        }

        //Add listeners to each state
        function onEachFeature(feature, layer){
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            })
        }

        //Add request to map
        stateCO2 = L.geoJSON(co2Data.responseJSON, {
            style: styleDens,
            onEachFeature: onEachFeature
        }).addTo(co2Map)

        console.log(stateCO2)

        console.log(stateCO2)
        
        //Create the info panel
        var info = L.control();

        info.onAdd = function(co2Map){
            this._div = L.DomUtil.create("div", "info") //create a div with a class 'info'
            this.update();
            return this._div;
        };

        //this method updates the control based on the feature properties that are passed
        info.update = function(props){
            this._div.innerHTML = '<h5>Per Capita Energy-Related CO2 Emissions</h5>' + (props ?
                '<b>' + props.STATE_NAME + '</b><br />' + props.CarbonDens + '<br /><p> metric tons of energy-related CO2 per person</p>'
                : 'Hover over a state')
        }

        info.addTo(co2Map)

        //Map legend
        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (co2Map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 9.4, 11.5, 14.41, 19.8, 28.51, 101.4],
                labels = [];

            div.innerHTML = '<h5>Legend</h5><h6>Metric tons of energy-related <br /> CO2 per person</h6>'

            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColorDens(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }

            return div;
        };

        legend.addTo(co2Map);

    })

    

    
    
}



/*L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGF1bGZtY2NvcmQiLCJhIjoiY2tjeHBnZ2xlMDI5bjJ6cGpjOXEzYW05ZyJ9.NM3YStLAa6pQK_tbbESB2w'
}).addTo(myMap);*/

/*L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: 'b9b1d1d976034a9cb63a19b5091a2316',
	maxZoom: 22
}).addTo(myMap);*/

//Toggle between menu pages
$(document).ready(function(){
    $(".selectMenu").click(function(event){
        index = $(this).index();
        $(".selectMenu").removeClass("active");
        $(this).addClass("active");
        $(".contentPage").hide();
        $(".contentPage").eq(index).show();
    })
})

var test = $()

if($(".selectMenu[data-rel='productsMenuItem']").hasClass("active")){
    console.log("products is active")

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
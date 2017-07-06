const LOCATION_LOOKUP_URL = 'http://freegeoip.net/json/';





function initMap() {
    var user_location = {};
    
    getUserLocation().done((data) => {
        user_location = {lat: data.latitude, lng: data.longitude};
        
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: user_location,
        });
        var marker = new google.maps.Marker({
            position: user_location,
            map: map
        });

    });
    
    
  
}


function getUserLocation() {
    return $.getJSON(LOCATION_LOOKUP_URL);

}
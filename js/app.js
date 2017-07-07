

var map = (function() {
    
    return {
    
        init: function() {
            var user_location = {};

            helper.getUserLocation().done((data) => {
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
        },
        
        
        
    
    };
    
    
})();


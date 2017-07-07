; (function() {
    const LOCATION_LOOKUP_URL = 'http://freegeoip.net/json/';
    var helper = {};
    
    helper.getUserLocation = function() {
        return $.getJSON(LOCATION_LOOKUP_URL);
    };
    
    
    this.helper = helper;
    
})();
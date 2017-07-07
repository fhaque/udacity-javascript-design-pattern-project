function MapMarker(api_map_marker, map) {
    if(api_map_marker) {
        this.marker = api_map_marker;
    }
    
    this.map = map;
    
}

MapMarker.prototype = {
    placeInMap: function() {
        this.marker.setMap(this.map);
    },
    
    removeFromMap: function() {
        this.marker.setMap(null);    
    },
    
    deleteMarker: function() {
        this.removeFromMap();
        this.marker = null;
    },
    
};
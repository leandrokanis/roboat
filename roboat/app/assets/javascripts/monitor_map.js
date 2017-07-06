var map;
var markers = [];
var latitude = -15.820315;
var longitude = -47.832984;
var roboat_marker;
var labels = '123';
var labelIndex = 0;
var image = "/assets/roboat_icon.png";

// Adds a marker to the map and push to the array.
function addMarker(location) {
    if (markers.length < 3) {
        var marker = new google.maps.Marker({
            position: location,
            label: labels[markers.length],
            map: map
        });
        markers.push(marker);
    }
}

function getMarkerFromForm(markerId) {
    var longitude = $("#collect_measures_attributes_" + markerId + "_longitude").val();
    var latitude = $("#collect_measures_attributes_" + markerId + "_latitude").val();
    var position = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
    };
    addMarker(position);
}

function setAllMarkers(){
  for (var i = 0; i < 3; i++) {
        getMarkerFromForm(i);
  }
}

function changeRoboatPosition() {
    getRoboatNewLocation();
    roboat_marker.setPosition(new google.maps.LatLng(latitude, longitude));
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

function initMap() {
    var lat_lng = {
        lat: -15.820315,
        lng: -47.832984
    };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: lat_lng,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    // This event listener will call addMarker() when the map is clicked.

    var infoWindow = new google.maps.InfoWindow({
        map: map
    });

    var roboat_lat_lng = {
        lat: latitude,
        lng: longitude
    };

    roboat_marker = new google.maps.Marker({
        position: roboat_lat_lng,
        map: map,
        icon: image,
        title: 'Roboat!'
    });

    // every 3 seconds
    setInterval(changeRoboatPosition, 3);
    setAllMarkers();
}

function getDistance(marker_id){
  var distance = google.maps.geometry.spherical.computeDistanceBetween(roboat_marker.getPosition(), markers[marker_id].getPosition());
  return distance;
}

function getHeading(marker_id){
  var heading = google.maps.geometry.spherical.computeHeading(roboat_marker.getPosition(), markers[marker_id].getPosition());
  return heading;
}

function navigate_forward(){

}

function navigate(marker_id){
    latitude += 0.000001;
    longitude += 0.000001;
}

function getRoboatNewLocation() {
  navigate();
}

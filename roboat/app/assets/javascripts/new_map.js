var map;
var markers = [];
var latitude = -15.820315;
var longitude = -47.832984;
var roboat_marker;
var labels = '123';
var labelIndex = 0;
var image = "/assets/roboat_icon.png";

function setValuesOnFields(amountOfMarkers) {
    amountOfMarkers--;
    $("#collect_measures_attributes_" + amountOfMarkers + "_latitude").val(markers[markers.length - 1].getPosition().lat());
    $("#collect_measures_attributes_" + amountOfMarkers + "_longitude").val(markers[markers.length - 1].getPosition().lng());
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
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });
    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function(event) {
        addMarker(event.latLng);
        setValuesOnFields(markers.length);
    });
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
}

function editPositionOnMap(markerId) {
    var latitude = $("#collect_measures_attributes_" + markerId + "_latitude").val();
    var longitude = $("#collect_measures_attributes_" + markerId + "_longitude").val();

    if (markers.length === markerId && markerId === markerId) {
        addMarker({
            lat: parseFloat(latitude),
            lng: parseFloat(longitude)
        });

    } else if (markers.length > markerId && markerId === markerId) {
        markers[markerId].setPosition(new google.maps.LatLng(parseFloat(latitude), parseFloat(longitude)));
    }
}

function changeRoboatPosition() {
    getRoboatNewLocation();
    roboat_marker.setPosition(new google.maps.LatLng(latitude, longitude));
}

function getRoboatNewLocation() {
    latitude += 0.000001;
    longitude += 0.000001;
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
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
// Deletes all markers in the array by removing references to them.
function deleteLastMarker() {
    markers[markers.length - 1].setMap(null);
    markers.pop();

    var amountOfMarkers = markers.length;
    $("#collect_measures_attributes_" + amountOfMarkers + "_latitude").val("");
    $("#collect_measures_attributes_" + amountOfMarkers + "_longitude").val("");
}

function call_edit_position(j) {
    return function(event) {
        editPositionOnMap(j);
    }
}

for (var i = 0; i < 3; i++) {
    $("#collect_measures_attributes_" + i.toString() + "_longitude").keyup(call_edit_position(i));
    $("#collect_measures_attributes_" + i.toString() + "_latitude").keyup(call_edit_position(i));
}

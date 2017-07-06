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
    //setInterval(changeRoboatPosition, 3);
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

function lat_dif(i){
  return roboat_marker.getPosition().lat() - markers[i].getPosition().lat();
}

function lng_dif(i){
  return roboat_marker.getPosition().lng() - markers[i].getPosition().lng();
}

function navigate_example(i){
  latitude -= lat_dif(i) / 1000;
  longitude -= lng_dif(i) / 1000;
}

$(function() {
    var _to_ascii = {
        '188': '44',
        '109': '45',
        '190': '46',
        '191': '47',
        '192': '96',
        '220': '92',
        '222': '39',
        '221': '93',
        '219': '91',
        '173': '45',
        '187': '61', //IE Key codes
        '186': '59', //IE Key codes
        '189': '45'  //IE Key codes
    }

    var shiftUps = {
        "96": "~",
        "49": "!",
        "50": "@",
        "51": "#",
        "52": "$",
        "53": "%",
        "54": "^",
        "55": "&",
        "56": "*",
        "57": "(",
        "48": ")",
        "45": "_",
        "61": "+",
        "91": "{",
        "93": "}",
        "92": "|",
        "59": ":",
        "39": "\"",
        "44": "<",
        "46": ">",
        "47": "?"
    };

    $(document).on('keydown', function(e) {
        var c = e.which;

        if (_to_ascii.hasOwnProperty(c)) {
            c = _to_ascii[c];
        }

        if (!e.shiftKey && (c >= 65 && c <= 90)) {
            c = String.fromCharCode(c + 32);
        } else if (e.shiftKey && shiftUps.hasOwnProperty(c)) {
            c = shiftUps[c];
        } else {
            c = String.fromCharCode(c);
        }

    }).on('keypress', function(e) {
        var val = String.fromCharCode(e.which)
        if (val === "a") {
          left();
        }
        if (val === "d") {
          right();
        }
        if (val === "w") {
          forward();
        }
        if (val === "s") {
          back();
        }
    });

});

function left(){$.ajax("left");}
function right(){$.ajax("right");}
function forward(){$.ajax("forward");}
function back(){$.ajax("back");}

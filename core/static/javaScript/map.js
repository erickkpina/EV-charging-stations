var map = L.map('map').setView([54.435049, -3.505543], 4.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let stations = JSON.parse(document.getElementById('stations_json').textContent)

var markers = L.markerClusterGroup();

stations.forEach(station => {
    var marker = L.marker([station.latitude, station.longitude]);
    marker.bindPopup(station.location_name);
    markers.addLayer(marker);
});

map.addLayer(markers);

function addUserMarker(lat, longitude) {
    L.marker([lat, longitude]).addTo(map);
}

function addRoutingControl(userLat, userLng, station_coordinates) {
    L.routing.control({
        waypoints: [
            L.latLng(userLat, userLng),
            L.latLng(station_coordinates[0], station_coordinates[1])
        ],
        routeWhileDragging: true
    }).addTo(map);
}

function addPopup(userLat, userLng, result) {
    var popup = L.popup()
        .setLatLng([userLat, userLng])
        .setContent(`The nearest charging station from your location is: ${result.name} <br> <br> Distance: ${result.distance.toFixed(2)} Km`)
        .openOn(map);
}

function handleLocationClick(e) {
    let lat = e.latlng.lat;
    let longitude = e.latlng.lng;

    addUserMarker(lat, longitude);

    fetch(`/get-nearest-station?latitude=${lat}&longitude=${longitude}`)
        .then(response => response.json())
        .then(result => {
            const station_coordinates = result.coordinates;
            addRoutingControl(lat, longitude, station_coordinates);
            addPopup(lat, longitude, result);
        });
}
function getUserLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLat = position.coords.latitude;
            var userLng = position.coords.longitude;

            addUserMarker(userLat, userLng);

            fetch(`/get-nearest-station?latitude=${userLat}&longitude=${userLng}`)
                .then(response => response.json())
                .then(result => {
                    const station_coordinates = result.coordinates;
                    addRoutingControl(userLat, userLng, station_coordinates);
                    addPopup(userLat, userLng, result);
                });
        });
    }
}

getUserLocation();
map.on('click', handleLocationClick);

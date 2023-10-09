document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([41.5055, -72.700], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Obtenha as estações do JSON incorporado
    var stations = JSON.parse(document.getElementById('stations_json').textContent);

    stations.forEach(function (station) {
        L.marker([station.latitude, station.longitude]).addTo(map);
    });

    map.on('click', function (e) {
        var lat = e.latlng.lat;
        var longitude = e.latlng.lng;

        L.marker([lat, longitude]).addTo(map);

        fetch(`/get-nearest-station?latitude=${lat}&longitude=${longitude}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                var station_coordinates = result.coordinates;
                var roundedDistance = result.distance.toFixed(2);
                var user_coordinates = [lat, longitude];

                var polyLine = L.polyline([user_coordinates, station_coordinates], { color: 'red' }).addTo(map);

                var popup = L.popup()
                    .setLatLng([lat, longitude])
                    .setContent('Distance: ' + roundedDistance + ' Km')
                    .openOn(map);
            });
    });
});
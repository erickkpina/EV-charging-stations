
function groupStationsByCountry(stations) {
    var stationsByCountry = {};
    stations.forEach(function (station) {
        var country = station.country;
        if (!stationsByCountry[country]) {
            stationsByCountry[country] = [];
        }
        stationsByCountry[country].push(station);
    });
    return stationsByCountry;
}

function createCountryLink(country, stationCount) {
    var countryLink = '/stations-by-country/' + country + '/';

    var countryLinkElement = document.createElement('a');
    countryLinkElement.className = 'country-header w-80 h-28 p-6 m-6 border-2 border-gray-100 rounded-lg shadow-xl bg-gray-100 hover:no-underline hover:text-black hover:border-green-500';
    countryLinkElement.href = countryLink;

    var countryNameElement = document.createElement('span');
    countryNameElement.textContent = country;
    countryNameElement.className = 'text-xl font-bold';
    countryLinkElement.appendChild(countryNameElement);

    var stationCountElement = document.createElement('p');
    stationCountElement.textContent = stationCount + ' charging stations';
    stationCountElement.className = 'text-base font-normal';
    countryLinkElement.appendChild(stationCountElement);

    return countryLinkElement;
}

function sortCountriesByStationCount(stationsByCountry) {
    return Object.keys(stationsByCountry).sort(function (a, b) {
        return stationsByCountry[b].length - stationsByCountry[a].length;
    });
}

function displayStationsByCountry(sortedCountries, stationsByCountry, $stationsByCountry) {
    sortedCountries.reverse().forEach(function (country) {
        var stationCount = stationsByCountry[country].length;
        var countryLinkElement = createCountryLink(country, stationCount);
        $stationsByCountry.append(countryLinkElement);
    });
}

$(document).ready(function () {
    var stations = JSON.parse(document.getElementById('stations_json').textContent);
    var stationsByCountry = groupStationsByCountry(stations);

    var $stationsByCountry = $('#stations-by-country');
    var sortedCountries = sortCountriesByStationCount(stationsByCountry);

    displayStationsByCountry(sortedCountries, stationsByCountry, $stationsByCountry);
});

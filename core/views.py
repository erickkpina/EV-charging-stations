from django.shortcuts import render
from core.models import EVChargingLocation
from django.http import JsonResponse
from geopy.distance import geodesic
from django.shortcuts import render, get_object_or_404


# Create your views here.
def index(request):
    stations = list(EVChargingLocation.objects.values('latitude', 'longitude')[:1200])
    context = {'stations': stations}
    return render(request, 'index.html', context)


def map_view(request):
    stations = list(EVChargingLocation.objects.values('latitude', 'longitude', 'location_name')[:1200])
    context = {'stations': stations}
    return render(request, 'map.html', context)


def list_stations_view(request):
    stations = list(EVChargingLocation.objects.values('location_name', 'city_town', 'country'))
    context = {'stations': stations, 'stations_count': len(stations)}
    return render(request, 'stations.html', context)


def stations_by_country_view(request, country):
    stations = list(EVChargingLocation.objects.filter(country=country))
    context = {'stations': stations, 'country': country, 'stations_count': len(stations)}
    return render(request, 'stations_by_country.html', context)


def station_detail(request, station_id):
    station = get_object_or_404(EVChargingLocation, pk=station_id)
    context = {'station': station}
    return render(request, 'station_detail.html', context)


def nearest_station(request):
    latitude = request.GET.get('latitude')
    longitude = request.GET.get('longitude')
    user_location = latitude, longitude
    station_distances = {}
    station_name = ''

    for station in EVChargingLocation.objects.all()[:1200]:
        station_name = station.location_name
        station_location = station.latitude, station.longitude
        distance = geodesic(user_location, station_location).km
        station_distances[distance] = station_location

    min_distance = min(station_distances)
    station_coords = station_distances[min_distance]

    return JsonResponse({
        'name': station_name,
        'coordinates': station_coords,
        'distance': min_distance
    })

from django.shortcuts import render
from core.models import EVChargingLocation
from django.http import JsonResponse
from geopy.distance import geodesic


# Create your views here.
def index(request):
    stations = list(EVChargingLocation.objects.values('latitude', 'longitude')[:1200])
    context = {'stations': stations}
    return render(request, 'index.html', context)


def map_view(request):
    stations = list(EVChargingLocation.objects.values('latitude', 'longitude')[:1200])
    context = {'stations': stations}
    return render(request, 'map.html', context)


def list_stations_view(request):
    stations = list(EVChargingLocation.objects.values('latitude', 'longitude')[:1200])
    context = {'stations': stations}
    return render(request, 'stations.html', context)


def nearest_station(request):
    latitude = request.GET.get('latitude')
    longitude = request.GET.get('longitude')
    user_location = latitude, longitude
    station_distances = {}

    for station in EVChargingLocation.objects.all()[:1200]:
        station_location = station.latitude, station.longitude
        distance = geodesic(user_location, station_location).km
        station_distances[distance] = station_location

    min_distance = min(station_distances)
    station_coords = station_distances[min_distance]

    return JsonResponse({
        'coordinates': station_coords,
        'distance': min_distance
    })

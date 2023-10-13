from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('map/', views.map_view, name='map'),
    path('stations/', views.list_stations_view, name='list_stations'),
    path('get-nearest-station/', views.nearest_station, name='nearest_station'),
    path('stations-by-country/<str:country>/', views.stations_by_country_view, name='stations_by_country'),
    path('stations/<int:station_id>/', views.station_detail, name='station_detail'),
]

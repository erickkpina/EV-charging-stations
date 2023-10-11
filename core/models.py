from django.db import models


# Create your models here.
class EVChargingLocation(models.Model):
    location_name = models.CharField(max_length=250, default='')
    city_town = models.CharField(max_length=250, default='')
    country = models.CharField(max_length=250, default='')
    latitude = models.FloatField()
    longitude = models.FloatField()


    def __str__(self):
        return self.location_name

import csv
from django.conf import settings
from django.core.management.base import BaseCommand
from core.models import EVChargingLocation


class Command(BaseCommand):
    help = 'Load data from EV Station file'

    def handle(self, *args, **kwargs):
        data_file = settings.BASE_DIR / 'data' / 'EV_Charging_Stations.csv'
        keys = [
            'AddressInfo - ID',
            'Location of Charging Point',
            'City / Town',
            'Latitude',
            'Longitude'
        ]  # Defina as colunas que deseja extrair do CSV.

        records = []
        with open(data_file, 'r', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                records.append({k: row[k] for k in keys})

        for record in records:
            # Certifique-se de que 'Latitude' e 'Longitude' sejam floats
            record['Latitude'] = float(record['Latitude'])
            record['Longitude'] = float(record['Longitude'])

            # Use esses valores para criar um objeto EVChargingLocation
            EVChargingLocation.objects.get_or_create(
                station_name=record['Location of Charging Point'],
                latitude=record['Latitude'],
                longitude=record['Longitude']
            )
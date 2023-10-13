import csv
import json
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Convert a CSV file to JSON'

    def add_arguments(self, parser):
        parser.add_argument('input_file', type=str, help='Input CSV file')
        parser.add_argument('output_file', type=str, help='Output JSON file')

    def handle(self, *args, **kwargs):
        input_file = kwargs['input_file']
        output_file = kwargs['output_file']

        data = []

        with open(input_file, 'r', encoding='utf-8') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            for row in csv_reader:
                data.append(row)

        with open(output_file, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, ensure_ascii=False, indent=4)

        self.stdout.write(
            self.style.SUCCESS(f'CSV file "{input_file}" converted to JSON file "{output_file}" successfully.'))

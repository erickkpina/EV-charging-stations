# Generated by Django 4.2.6 on 2023-10-11 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='evcharginglocation',
            name='station_name',
        ),
        migrations.AddField(
            model_name='evcharginglocation',
            name='address_info_id',
            field=models.IntegerField(default=-1, unique=True),
        ),
        migrations.AddField(
            model_name='evcharginglocation',
            name='city_town',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='evcharginglocation',
            name='country',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='evcharginglocation',
            name='county_council',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='evcharginglocation',
            name='district_council',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='evcharginglocation',
            name='local_authority',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='evcharginglocation',
            name='location_name',
            field=models.CharField(default='', max_length=250),
        ),
        migrations.AddField(
            model_name='evcharginglocation',
            name='postcode',
            field=models.CharField(default='', max_length=250),
        ),
    ]

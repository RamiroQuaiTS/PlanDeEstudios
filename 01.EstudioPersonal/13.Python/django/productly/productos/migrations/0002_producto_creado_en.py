# Generated by Django 4.1.7 on 2023-04-13 21:48

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='creado_en',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
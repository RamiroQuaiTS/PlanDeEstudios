# Generated by Django 4.1.7 on 2023-04-13 21:51

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0002_producto_creado_en'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='creado_en',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]

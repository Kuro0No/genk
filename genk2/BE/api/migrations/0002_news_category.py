# Generated by Django 4.1.2 on 2022-10-05 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='category',
            field=models.ManyToManyField(null=True, to='api.category'),
        ),
    ]

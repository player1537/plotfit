# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-20 18:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ReducedDataset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('filename', models.FilePathField(path='/Users/tcf/src/django-webpack-plotfit/iq-data')),
            ],
        ),
    ]
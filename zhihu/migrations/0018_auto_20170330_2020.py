# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-30 12:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zhihu', '0017_auto_20170330_2015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile',
            field=models.ImageField(blank=True, default='images/water.jpg', max_length=255, null=True, upload_to='images'),
        ),
    ]
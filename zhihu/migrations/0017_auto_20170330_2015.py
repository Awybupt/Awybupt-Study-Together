# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-30 12:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zhihu', '0016_auto_20170325_1308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile',
            field=models.ImageField(blank=True, default='water.jpg', max_length=255, null=True, upload_to='images'),
        ),
    ]

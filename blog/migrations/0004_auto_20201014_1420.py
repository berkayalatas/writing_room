# Generated by Django 3.1.1 on 2020-10-14 11:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20201013_2358'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='likes',
        ),
        migrations.DeleteModel(
            name='Like',
        ),
    ]

<<<<<<< HEAD
# Generated by Django 4.0.3 on 2022-09-16 16:56
=======
# Generated by Django 4.0.3 on 2022-09-14 22:21
>>>>>>> main

import accounts.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='owner',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=accounts.models.user_directory_path),
        ),
    ]

# Generated by Django 4.0.3 on 2022-09-13 18:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='OwnerVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.CharField(max_length=2)),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.PositiveBigIntegerField(unique=True)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Dog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('age', models.SmallIntegerField(blank=True, null=True)),
                ('breed', models.CharField(default='mix', max_length=100)),
                ('image', models.FileField(blank=True, null=True, upload_to='dogs')),
                ('description', models.TextField(blank=True, max_length=1000, null=True)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('size', models.CharField(choices=[('Toy', '2-9 Pounds'), ('Small', '10-34 Pounds'), ('Medium', '35-54 Pounds'), ('Large', '55-74 Pounds'), ('Giant', '75-120+ Pounds')], max_length=6)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owner', to='puppylove_rest.ownervo')),
            ],
        ),
        migrations.CreateModel(
            name='AWSPhoto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('upload', models.FileField(upload_to='')),
                ('dog_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dog', to='puppylove_rest.dog')),
            ],
        ),
    ]

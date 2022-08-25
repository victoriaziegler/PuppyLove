import cloudinary.models
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AWSPhoto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('upload', models.FileField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='image')),
            ],
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('abbreviation', models.CharField(max_length=2, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Owner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.PositiveSmallIntegerField(validators=[django.core.validators.MaxValueValidator(9999999999)])),
                ('description', models.TextField(max_length=1000)),
                ('state', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='+', to='puppylove_rest.state')),
            ],
        ),
        migrations.CreateModel(
            name='Dog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
<<<<<<< HEAD
                ('age', models.SmallIntegerField(blank=True, null=True)),
                ('breed', models.CharField(default='mix', max_length=100)),
                ('description', models.TextField(blank=True, max_length=1000, null=True)),
=======
                ('age', models.SmallIntegerField()),
                ('breed', models.CharField(max_length=100)),
                ('picture', models.ImageField(blank=True, null=True, upload_to='media/')),
                ('description', models.TextField(max_length=1000)),
>>>>>>> main
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owner', to='puppylove_rest.owner')),
            ],
        ),
    ]

from django.db import models


def user_directory_path(instance, filename):
    filename = instance.name
    return "{0}/{1}".format(instance.owner.id, filename)


class OwnerVO(models.Model):
    state = models.CharField(max_length=2)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.PositiveBigIntegerField(unique=True)
    description = models.TextField(max_length=1000)

    def __str__(self):
        return f"{self.name}"


class Dog(models.Model):
    GENDER_CHOICES = (
        ("M", "Male"),
        ("F", "Female"),
    )
    SIZE_CHOICES = (
        ("Toy", "2-9 Pounds"),
        ("Small", "10-34 Pounds"),
        ("Medium", "35-54 Pounds"),
        ("Large", "55-74 Pounds"),
        ("Giant", "75-120+ Pounds"),
    )
    name = models.CharField(max_length=200)
    age = models.SmallIntegerField(null=True, blank=True)
    breed = models.CharField(max_length=100, default="mix")
    image = models.FileField(upload_to=user_directory_path)
    description = models.TextField(max_length=1000, null=True, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    size = models.CharField(max_length=6, choices=SIZE_CHOICES)
    owner = models.ForeignKey(
        OwnerVO, related_name="owner", on_delete=models.CASCADE, null=False
    )

    def __str__(self):
        return f"{self.name}"


class AWSPhoto(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    dog_id = models.ForeignKey(
        OwnerVO,
        related_name="photo",
        on_delete=models.CASCADE
    )
    upload = models.FileField()

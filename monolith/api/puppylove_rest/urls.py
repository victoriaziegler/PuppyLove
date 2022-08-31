from django.urls import path
from .views import api_dogs, AWSPhotoCreateView, api_owners, api_show_delete_update_dog


urlpatterns = [
    path("dogs/", api_dogs, name="api_dogs"),
    path("owners/", api_owners, name="api_owners"),
    path("upload/", AWSPhotoCreateView.as_view(), name="photo_form")
    ]

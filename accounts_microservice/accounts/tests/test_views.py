from django.http import JsonResponse
from django.test import TestCase, Client
from django.urls import reverse
from ..encoders import StateEncoder, OwnerEncoder
from ..models import State, Owner

class TestStates(TestCase):
    def test_list_states(self):
        client = Client()
        response = client.get(reverse("api_states"))
        self.assertEquals(response.status_code, 200)

class TestOwners(TestCase):
    def test_list_owners(self):
        client = Client()
        response = client.get(reverse("api_owners"))
        self.assertEquals(response.status_code, 200)
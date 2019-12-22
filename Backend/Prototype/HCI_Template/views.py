from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from HCI_Template.models import Book
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from HCI_Template.serializers import BookSerializer, UserSerializer


def index(request):
    obj = Book.create("Buch 1")
    Book.save(obj)
    return HttpResponse("Hello, world. You're at the HCI-prototype index.")


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# ViewSets define the view behavior.
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


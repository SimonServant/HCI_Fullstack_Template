from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from HCI_Template.models import Book


def index(request):
    obj = Book.create("Buch 1")
    Book.save(obj)
    return HttpResponse("Hello, world. You're at the HCI-prototype index.")





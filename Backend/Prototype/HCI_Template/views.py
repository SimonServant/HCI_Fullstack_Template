from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView,)
from .permission import IsOwnerProfileOrReadOnly
from .models import userProfile
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView

from HCI_Template.models import Book
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, status
from .serializers import BookSerializer, UserSerializer, GroupSerializer, userProfileSerializer
import jwt
import json


def index(request):
    """
    The home page. This renders the container for the single-page app.
    """
    #obj = Book.create("Buch 1")
    # Book.save(obj)
    return HttpResponse("Hello, world. You're at the HCI-prototype index.")


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


# Create your views here.


class UserProfileListCreateView(ListCreateAPIView):
    queryset = userProfile.objects.all()
    serializer_class = userProfileSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)


class userProfileDetailView(RetrieveUpdateDestroyAPIView):
    queryset = userProfile.objects.all()
    serializer_class = userProfileSerializer
    permission_classes = [IsOwnerProfileOrReadOnly, IsAuthenticated]

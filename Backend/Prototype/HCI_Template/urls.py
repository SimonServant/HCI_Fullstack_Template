from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import UserProfileListCreateView, userProfileDetailView
from . import views

urlpatterns = [
    path('', views.index, name='index'),

    # gets all user profiles and create a new profile
    path("all-profiles", UserProfileListCreateView.as_view(), name="all-profiles"),
    # retrieves profile details of the currently logged in user
    path("profile/<int:pk>", userProfileDetailView.as_view(), name="profile"),
]

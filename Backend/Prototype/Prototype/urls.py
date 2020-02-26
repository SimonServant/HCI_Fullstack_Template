"""Prototype URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url
from rest_framework import routers
from HCI_Template.api_views import BookViewSet, UserViewSet, GroupViewSet, QuestionViewSet, AnswerViewSet
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from rest_framework.authtoken.views import ObtainAuthToken


router = routers.DefaultRouter()
router.register(r'book', BookViewSet)
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'answers', AnswerViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    url('index/', include('HCI_Template.urls')),
    url(r'^', include(router.urls)),

    path(r'api-auth/', ObtainAuthToken.as_view()),

    path(r'api-token-auth/', obtain_jwt_token),
    path(r'api-token-refresh/', refresh_jwt_token),
    path(r'api-token-verify/', verify_jwt_token),
]

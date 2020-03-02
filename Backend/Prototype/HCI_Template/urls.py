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
    url(r'^', include(router.urls)),
    path(r'api-auth/', ObtainAuthToken.as_view()),

    path(r'api-token-auth/', obtain_jwt_token),
    path(r'api-token-refresh/', refresh_jwt_token),
    path(r'api-token-verify/', verify_jwt_token),
]

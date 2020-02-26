from HCI_Template.models import Book, Answer, Question
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, request
from .serializers import BookSerializer, UserSerializer, GroupSerializer, QuestionSerializer, AnswerSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)

    def get_queryset(self, *args, **kwargs):
        queryset_list = User.objects.all().order_by('-date_joined')
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(first_name=query),
                Q(id=query),
                Q(username=query),
            ).distinct()

        return queryset_list


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get_queryset(self, *args, **kwargs):
        queryset_list = Question.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(question=query),
                # Q(up_votes=query),
                # Q(down_votes=query),
                # Q(user_id=query),
            ).distinct()
        return queryset_list


class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def get_queryset(self, *args, **kwargs):
        queryset_list = Answer.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(answer=query),
                # Q(up_votes=query),
                # Q(down_votes=query),
                # Q(user_id=query),
                # Q(question_id=query),
            ).distinct()
        return queryset_list

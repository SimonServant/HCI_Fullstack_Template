from symbol import pass_stmt

from django.contrib.auth.models import User, Group
from HCI_Template.models import Book, Answer, Question
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = User
        write_only_fields = ('password',)
        read_only_fields = ('id',)
        fields = ['id', 'username', 'email', 'password']


class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ["title"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    q = User.objects.all()
    user = serializers.PrimaryKeyRelatedField(queryset=q, required=False)

    class Meta:
        model = Question
        fields = [
            'question',
            'up_votes',
            'down_votes',
            'user',
            'date',
            'title',
            'tags',
        ]
        read_only_fields = ['date']

    def create(self, validated_data):
        """
        create a question related to a User
        :rtype: question_obj
        """

        question = validated_data.pop('question')
        up_votes = validated_data.pop('up_votes')
        down_votes = validated_data.pop('down_votes')
        user = validated_data.pop('user')
        title = validated_data.pop('title')
        tags = validated_data.pop('tags')

        question_obj = Question.objects.create(question=question, up_votes=up_votes, down_votes=down_votes,
                                               user=user, title=title, tags=tags)
        question_obj.save()
        return question_obj


class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    q = User.objects.all()
    q2 = Question.objects.all()
    user = serializers.PrimaryKeyRelatedField(queryset=q, required=False)
    question = serializers.PrimaryKeyRelatedField(queryset=q2, required=False)

    class Meta:
        model = Answer
        fields = [
            'answer',
            'up_votes',
            'down_votes',
            'question',
            'user',
            'date',
        ]
        read_only_fields = ['date']

    def create(self, validated_data):
        validated_data = validated_data
        answer = validated_data.pop('answer')
        up_votes = validated_data.pop('up_votes')
        down_votes = validated_data.pop('down_votes')
        question = validated_data.pop('question')
        user = validated_data.pop('user')

        answer_obj = Answer.objects.create(answer=answer, up_votes=up_votes, down_votes=down_votes,
                                           question=question, user=user)
        answer_obj.save()
        return answer_obj

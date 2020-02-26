from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=100)

    @classmethod
    def create(cls, title):
        book = cls(title=title)
        return book

    def __str__(self):
        return self.title


class Question(models.Model):
    question = models.CharField(max_length=256)
    up_votes = models.IntegerField(default=0)
    down_votes = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Question"

    @classmethod
    def create(cls, question):
        question = cls(title=question)
        return question

    def __str__(self):
        return self.question


class Answer(models.Model):
    answer = models.CharField(max_length=256)
    up_votes = models.IntegerField(default=0)
    down_votes = models.IntegerField(default=0)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Answer"

    @classmethod
    def create(cls, answer):
        answer = cls(title=answer)
        return answer

    def __str__(self):
        return self.answer

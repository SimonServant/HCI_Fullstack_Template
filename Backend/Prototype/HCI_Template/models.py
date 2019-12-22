from django.db import models

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

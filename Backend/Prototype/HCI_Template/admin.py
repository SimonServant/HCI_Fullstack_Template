from django.contrib import admin

# Register your models here.
from HCI_Template.models import Book, Answer, Question

admin.site.register(Book)
admin.site.register(Answer)
admin.site.register(Question)

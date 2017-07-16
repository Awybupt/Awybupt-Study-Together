from django.contrib import admin
from focuses.models import Question,Answer,Topic
# Register your models here.

admin.site.register(Answer)
admin.site.register(Question)
admin.site.register(Topic)

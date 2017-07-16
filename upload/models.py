from __future__ import unicode_literals
from zhihu.models import *
from django.db import models

def upload_to(model,filename):
    return './uploading/%s' % (model.filename)
# Create your models here.
class File(models.Model):
    user = models.ForeignKey(User)
    filename = models.CharField(max_length = 30)
    headImg = models.FileField(upload_to = upload_to)

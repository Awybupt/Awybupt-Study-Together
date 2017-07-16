from django.db import models
from django.db.models.signals import post_save
from study import settings
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    #user = models.OneToOneField(User)
    profile=models.ImageField(upload_to='images', max_length=255, null=True, blank=True,default='images/water.jpg')
    #username=models.CharField(max_length=30)
    #password = models.CharField(max_length=40)
    sex = models.CharField(max_length=10,blank=True)
    sch = models.CharField(max_length=50, blank=True)
    grade = models.CharField(max_length=30,blank=True)
    major = models.CharField(max_length=40,blank=True)
    phone_number= models.CharField(max_length=11,blank=True)
    email=models.EmailField(blank=True,null=True)

    def __str__(self):
        return self.username

    def user_count(self):
        return self.count()


class Tag(models.Model):
    tag_name=models.CharField(max_length=20)
    publish_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.tag_name


class Article(models.Model):
    title = models.CharField(max_length=40)
    context = models.TextField()
    author = models.ForeignKey(User,on_delete=models.CASCADE,blank=True)
    tags = models.ManyToManyField(Tag,blank=True)
    publish_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title





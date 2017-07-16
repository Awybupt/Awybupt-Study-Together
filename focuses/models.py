from django.db import models
from zhihu.models import User,Tag,Article


# Create your models here.


class Question(models.Model):
    ques_title=models.CharField(max_length=30)
    ques_description=models.CharField(max_length=500)
    ques_tags=models.ManyToManyField(Tag,blank=True)
    ques_user=models.ForeignKey(User)

    def __str__(self):
        return self.ques_title

    def qus_count(self):
        return self.count()


class Answer(models.Model):
    ans_text=models.CharField(max_length=1000)
    ans_user=models.ForeignKey(User)

    def __str__(self):
        return self.ans_text

    def ans_count(self):
        return self.count()


class Topic(models.Model):
    question=models.OneToOneField(Question)
    answers=models.ManyToManyField(Answer,blank=True)
    pub_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question.ques_title

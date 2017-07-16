from django import forms
from .models import *


class QuesForm(forms.Form):
    ques_title=forms.CharField(label='问题',max_length=30)
    ques_description=forms.CharField(label= '描述',max_length=500)



    class Meta:
        models=Question
        fields=('ques_title','ques_description')


class AnsForm(forms.Form):
    ans_text=forms.CharField(label= '回答',max_length=1000)

    class Meta:
        models=Answer
        fields=('ans_text',)



from django import forms
from .models import User, Article, Tag
from django.contrib.auth.models import User
from django.contrib.auth.forms import ReadOnlyPasswordHashField as PasswordField


class UserForm(forms.Form):
    username=forms.CharField(label='用户名',max_length=30)
    password= forms.CharField(label='密码',widget=forms.PasswordInput())

    class Meta:
        models = User
        fields = ('username','password')


class UserRegister(forms.Form):
    username = forms.CharField(label='用户名', max_length=30)
    password1 = forms.CharField(label='密码', widget=forms.PasswordInput())
    password2 = forms.CharField(label='确认密码', widget=forms.PasswordInput())
    email=forms.EmailField(label='邮箱',)

    class Meta:
        models=User


class UserUpdateForm(forms.Form):
    profile=forms.ImageField()
    username = forms.CharField(max_length=30)
    sex = forms.CharField(max_length=10)
    sch = forms.CharField(max_length=50)
    grade = forms.CharField(max_length=30)
    major = forms.CharField(max_length=40)
    phone_number = forms.CharField(max_length=11)
    email = forms.EmailField()
    class Meta:
        models=User



class ArticleForm(forms.Form):
    title = forms.CharField(max_length=50)
    context = forms.CharField(widget=forms.Textarea)
    tags = forms.CharField(max_length=40)

    class Meta:
        models = Article
        fields = ('title', 'context', 'tags')



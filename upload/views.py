#coding=utf-8
import os

from django.shortcuts import render,render_to_response
from django import forms
from django.http import HttpResponse,StreamingHttpResponse
from .models import File
from zhihu.models import User

# Create your views here.
class FileForm(forms.Form):
    filename = forms.CharField()
    headImg = forms.FileField()

def uploading(request,id):
    user = User.objects.get(id=id)
    uf = FileForm()
    names = File.objects.all()
    if request.method == "POST":
        uf = FileForm(request.POST, request.FILES)
        if uf.is_valid():
            filename = uf.cleaned_data['filename']
            headImg = uf.cleaned_data['headImg']
            upfile = File()
            upfile.user = user
            upfile.filename = filename
            upfile.headImg = headImg
            upfile.save()

            return render_to_response('upload.html', locals())
    return render_to_response('upload.html',locals())

def downloading(request):
    def file_iterator(file_name, chunk_size=512):
        with open(file_name) as f:
            while True:
                c = f.read(chunk_size)
                if c:
                    yield c
                else:
                    break
    the_file_name = request.GET.get('path')
    response = StreamingHttpResponse(file_iterator(the_file_name))
    response['Content-Length'] = os.path.getsize(the_file_name)
    response['Content-Type'] = 'application/octet-stream'
    response['Content-Disposition'] = 'attachment;filename="{0}"'.format(the_file_name)
    return response
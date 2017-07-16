from django.shortcuts import render,redirect
from focuses.models import *
from focuses.forms import *
# Create your views here.


def top_list(request,id):
    user=User.objects.get(id=id)
    topics=Topic.objects.order_by('-pub_time')
    return render(request,'focuses/top_list.html',{'topics':topics,'user':user})


def ques_disp(request,pk,id):
    user=User.objects.get(id=id)
    topic=Topic.objects.get(pk=pk)
    return render(request,'focuses/answer.html',{'topic':topic,'user':user})


def do_ques(req,id):
    user=User.objects.get(id=id)
    if req.method == 'POST':
        form = QuesForm(req.POST)
        if form.is_valid():
            ques_title = form.cleaned_data['ques_title']
            ques_description=form.cleaned_data['ques_description']
            ques_user=user
            question = Question.objects.create(ques_user=ques_user,ques_title=ques_title,ques_description=ques_description)
            question.save()
            topic=Topic.objects.create(question=question)
            topic.save()
            return redirect('top_list',id=user.id)
    else:
        form=QuesForm()
    return render(req, 'focuses/do_ques.html', {'form': form})


def do_ans(req,id,pk):
    topic=Topic.objects.get(pk=pk)
    user=User.objects.get(id=id)
    if req.method=='POST':
        form=AnsForm(req.POST)
        if form.is_valid():
            ans_text=form.cleaned_data['ans_text']
            ans_text = ans_text.replace("<p>", "")
            ans_text = ans_text.replace("</p>", "")
            ans_user=user
            answer=Answer.objects.create(ans_text=ans_text,ans_user=ans_user)
            answer.save()
            topic.answers.add(answer)
            topic.save()
            return redirect('ques_disp',id=user.id,pk=topic.pk)
    else:
        form=AnsForm()
    return render(req,'focuses/answer.html',{'user':user,'topic':topic})



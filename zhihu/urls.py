from django.conf.urls import url
from . import views
from focuses import views as topic_views
from study import settings
from django.conf.urls.static import static
from django.conf import settings
from upload import views as upload_views

urlpatterns = [

    url(r'^$', views.firstpage, name='first_page'),
    url(r'^login/$', views.login, name='login'),
    url(r'^logout/$',views.logout,name='logout'),
    url(r'^register/$', views.register, name='register'),
    url(r'^list/(?P<id>[0-9]+)/$', views.article_list, name='article_list'),
    url(r'^article/(?P<id>[0-9]+)/detail/$',views.article_detail, name='article_detail'),
    url(r'^(?P<id>[0-9]+)article/add/$', views.article_add, name= 'article_add'),
    url(r'^article/(?P<id>[0-9]+)/update/$', views.article_update, name='article_update'),
    url(r'^author/(?P<id>[0-9]+)/update/$', views.author_update, name='author_update'),
    url(r'^author/(?P<id>\d+)/detail/$', views.author_detail, name='author_detail'),
    url(r'^(?P<id>[0-9]+)/mypage/$',views.mypage,name='mypage'),
    url(r'^topic/(?P<id>[0-9]+)/$',topic_views.top_list,name='top_list'),
    url(r'^question/(?P<id>[0-9]+)/new/$',topic_views.do_ques,name='do_ques'),
    url(r'^topic/(?P<id>[0-9]+)/question/(?P<pk>[0-9]+)/$',topic_views.ques_disp,name='ques_disp'),
    url(r'^topic/(?P<id>[0-9]+)/answer/(?P<pk>[0-9]+)/$',topic_views.do_ans,name='do_ans'),
    url(r'^upload/(?P<id>[0-9]+)/$', upload_views.uploading,name='file_upload'),
    url(r'^upload/(?P<id>[0-9]+)/download/$', upload_views.downloading,name='file_download'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

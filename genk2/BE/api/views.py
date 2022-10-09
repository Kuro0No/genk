from django.shortcuts import render
from rest_framework import viewsets
from .models import DangChuY, News,Category, TopNews
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .paginations import CustomPageNumberPagination
from .serializer import CategorySerializer, DangChuYSearialzers, NewsSearialzers, TopNewsSearialzers
from rest_framework.response import Response
from django.db.models import Q

# Create your views here.

class getNews(viewsets.ModelViewSet):
    # queryset = News.objects.exclude(title__in=TopNews.objects.all()).order_by('-createdAt')
    pagination_class = CustomPageNumberPagination #dùng pagination với Class
    serializer_class = NewsSearialzers
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,] #filters.BaseFilterBackend, filters.OrderingFilter,
    ordering = ('-created',)
    # filter_fields = ['genres',]
    search_fields = ['title',]
    def get_queryset(self):
        # lấy news ko trùng với topNews
        if(self.request.GET.get('show-top-news') == 'false' and self.request.GET.get('show-dang-chu-y') == 'false'):
            return News.objects.exclude(uuid__in=list(TopNews.objects.union(DangChuY.objects.all()).values_list('news_id',flat=True))).order_by('-createdAt')
        elif (self.request.GET.get('show-top-news') == 'false'):
            return News.objects.exclude(uuid__in=list(TopNews.objects.all().values_list('news_id',flat=True))).order_by('-createdAt')
        elif (self.request.GET.get('show-dang-chu-y') == 'false'):
            return News.objects.exclude(uuid__in=list(DangChuY.objects.all().values_list('news_id',flat=True))).order_by('-createdAt')
        
        return  News.objects.all()



class getCategory(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    pagination_class = CustomPageNumberPagination #dùng pagination với Class
    serializer_class = CategorySerializer
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,] #filters.BaseFilterBackend, filters.OrderingFilter,
    # filter_fields = ['genres',]
    search_fields = ['name',]

class getTopNews(viewsets.ModelViewSet):
    queryset = TopNews.objects.all()
    serializer_class = TopNewsSearialzers
    # search_fields = ['news__name',]
   
class getDangChuY(viewsets.ModelViewSet):
    queryset = DangChuY.objects.all()
    serializer_class = DangChuYSearialzers
    # search_fields = ['news__name',]
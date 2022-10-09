from rest_framework.serializers import ModelSerializer,SerializerMethodField
from rest_framework import serializers 
from .models import Category,News,TopNews,PhotoList
from rest_framework import viewsets

class CategorySerializer(ModelSerializer):
    
    class Meta:
        model= Category
        fields ='__all__'

class NewsSearialzers(ModelSerializer):
 
    category = CategorySerializer(read_only=True, many=True)
   
    class Meta:
        model= News
        fields = '__all__'


class TopNewsSearialzers(ModelSerializer):
    news = NewsSearialzers(read_only=True)
    class Meta:
        model= TopNews
        fields = '__all__'
class DangChuYSearialzers(ModelSerializer):
    news = NewsSearialzers(read_only=True)
    class Meta:
        model= TopNews
        fields = '__all__'
class PhotoListSearialzers(ModelSerializer):
    
    class Meta:
        model= PhotoList
        fields = ['img']
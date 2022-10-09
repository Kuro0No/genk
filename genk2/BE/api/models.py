from distutils.command.upload import upload
from django.db import models
import uuid

# Create your models here.


class Category(models.Model):
    name = models.CharField(null=True,max_length=200)
    def __str__(self):
        return f"{self.name}, {self.id} "

class News(models.Model):
    title= models.CharField(null=True,max_length=200)
    short_des = models.CharField(null=True,max_length=200)
    content = models.TextField(null=True,blank=True)
    img= models.ManyToManyField('PhotoList')
    banner = models.ImageField(upload_to='img/',null=True)
    createdAt= models.DateTimeField(auto_now_add=True)
    category = models.ManyToManyField('Category')
    # updatedAt = models.DateTimeField(auto_add=True)
    uuid = models.UUIDField(primary_key = True, default =uuid.uuid4, unique=True, editable=False )
    def __str__(self):
        return f"{self.title}"
    

class TopNews(models.Model):
    news = models.ForeignKey('News', on_delete=models.CASCADE, null=True)
    def __str__(self):
        return f"{self.news}"   

class DangChuY(models.Model):
    news = models.ForeignKey('News', on_delete=models.CASCADE, null=True)
    def __str__(self):
        return f"{self.news}"   


class PhotoList(models.Model):
    img= models.FileField(upload_to='img/', null=True)

    
    def __str__(self):
        return f"{self.img}"
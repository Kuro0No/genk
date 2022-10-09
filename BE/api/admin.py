from django.contrib import admin

# Register your models here.
from django.db import models

from .models import Category, DangChuY, News, TopNews,PhotoList

# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name','id', )
    list_search = ('name')
    readonly_fields = ['id']
admin.site.register(Category,CategoryAdmin)

class NewsAdmin(admin.ModelAdmin):
   
    list_display = ('title','uuid', )
    list_search = ('title')
    readonly_fields = ['uuid',]
    
admin.site.register(News,NewsAdmin)

class TopNewsAdmin(admin.ModelAdmin):
    list_display = ['news' ]
    list_search = ('news')
admin.site.register(TopNews,TopNewsAdmin)

class DangChuYAdmin(admin.ModelAdmin):
    list_display = ['news' ]
    list_search = ('news')
admin.site.register(DangChuY,DangChuYAdmin)

class PhotoListAdmin(admin.ModelAdmin):
    list_display = ['img' ]
    
    
admin.site.register(PhotoList,PhotoListAdmin)

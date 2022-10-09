from django.conf.urls.static import static
from django.conf import settings
from django.db import router
from django.urls import path,include
from . import views

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('category', views.getCategory, basename='categorys')
router.register('news', views.getNews, basename='news')
router.register('top-news', views.getTopNews, basename='top-news')
router.register('dang-chu-y', views.getDangChuY, basename='dang-chu-y')

urlpatterns=[
    path('', include(router.urls)),
    # path('category', views.Category, name='category'),

    # path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
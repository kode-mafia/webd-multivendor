from django.contrib import admin
from django.urls import path
from DjangoEcommerceApp import views
from DjangoEcommerceApp import AdminViews
from django.conf.urls.static import static
from django.urls import include
from . import views


from DjangoEcommerce import settings

urlpatterns = [
    path('banner',views.banner,name='banner'),
    
    
]
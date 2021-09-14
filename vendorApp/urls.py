from django.urls import path
from django.conf.urls import url, include
from . import views

urlpatterns = [
    path('registervendor', views.registervendor, name='registervendor'),
     path('vendorlogin', views.vendorlogin, name='vendorlogin'),
]
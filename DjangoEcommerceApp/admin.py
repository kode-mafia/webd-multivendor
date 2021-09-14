from django.contrib import admin
from DjangoEcommerceApp.models import Categories,SubCategories,Products

# Register your models here.
admin.site.register(Categories)
admin.site.register(SubCategories)
admin.site.register(Products)
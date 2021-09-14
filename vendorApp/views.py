from django.shortcuts import render
from DjangoEcommerceApp.models import MerchantUser 
# Create your views here.
def registervendor(request):
    vendor = MerchantUser.objects.all()
    context ={
        'vendor':vendor
    }
    return render(request, 'vendor_templates/vendor_register.html',context)

def vendorlogin(request):
    return render(request, 'vendor_templates/vendor_login.html')    


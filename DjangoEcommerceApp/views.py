from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.urls import reverse
from DjangoEcommerceApp.models import Products,ProductMedia

# Create your views here.
def demoPage(request):
    return HttpResponse("demo Page")

def demoPageTemplate(request):
    return render(request,"demo.html")

def adminLogin(request):
    return render(request,"admin_templates/signin.html")

def adminLoginProcess(request):
    username=request.POST.get("username")
    password=request.POST.get("password")

    user=authenticate(request=request,username=username,password=password)
    if user is not None:
        login(request=request,user=user)
        return HttpResponseRedirect(reverse("admin_home"))
    else:
        messages.error(request,"Error in Login! Invalid Login Details!")
        return HttpResponseRedirect(reverse("admin_login"))

def adminLogoutProcess(request):
    logout(request)
    messages.success(request,"Logout Successfully!")
    return HttpResponseRedirect(reverse("admin_login"))



def home(request):
    products = Products.objects.all().filter(is_active=1)
    productmedias = ProductMedia.objects.all()
    
    # print(products)
    print(productmedias)
    context = {
        'products':products,
        'productmedias':productmedias
    }
    return render(request,'home.html',context)

def banner(request):
    return render(request,"create_banner.html")
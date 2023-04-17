from django.http import HttpResponse
from django.shortcuts import render
from .models import Producto, Categoria

# Create your views here.


def index(request):
    productos = Producto.objects.all()

    return render(
        request,
        'index.html',
        context={
            'productos': productos
        }
    )


def prd(request):
    return HttpResponse('Hola a un producto!')

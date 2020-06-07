import django_filters
from django_filters import CharFilter 
from .models import *
from django.forms.widgets import TextInput, Textarea
from django.forms import widgets
from django import forms

class ProductFilter(django_filters.FilterSet):
    name=CharFilter(field_name='name', lookup_expr='icontains', label="", widget=TextInput(attrs=
        {   'placeholder': 'Search for products, brands and more', 
            'class': 'form-control',
            'size': 85,
        }
    ))
    class Meta:
        model=Product
        fields='__all__'
        exclude=['name', 'price', 'digital', 'image', 'description']
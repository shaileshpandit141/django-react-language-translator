"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views.

"""
from django.contrib import admin
from django.urls import path, include


# Importing the IndexView from views.py file

from .views import IndexView, testMessage


# Importing the translatorAPI urls

from translatorAPI import urls


# Define all URLs for backend project.

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view()),
    path('api/', include(urls)),
    path('api/test-message/', testMessage),
]

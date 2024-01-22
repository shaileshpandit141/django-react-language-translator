"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views.

"""

from django.urls import path


# Importing all views

from .views import translate, supportedLanguages


# Define all URLs for backend project.

urlpatterns = [
    path('translator/', translate),
    path('translator/get-supported-languages/', supportedLanguages),
]

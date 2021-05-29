from django.shortcuts import render
from rest_framework import generics

from .models import Api
from .serializers import ApiSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = Api.objects.all()
    serializer_class = ApiSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Api.objects.all()
    serializer_class = ApiSerializer

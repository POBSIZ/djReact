from django.urls import path, include
from . import views

app_name = "api"

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
]

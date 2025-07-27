from django.urls import path
from api.views import createUser
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path('user/register/', createUser.as_view(), name='create_user'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('notes/',views.NoteListCreate.as_view(),name='note-list'),
    path('notes/delete/<int:pk>/',views.NoteDelete.as_view(),name='delete-note'),
        
]

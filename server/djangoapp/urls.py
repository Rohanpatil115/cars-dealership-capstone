
from django.urls import path
from . import views

urlpatterns = [
    path("login/", views.login_user, name="login"),
    path("logout/", views.logout_user, name="logout"),
    path(
        "get_dealer_reviews/<int:dealer_id>/",
        views.get_dealer_reviews,
        name="get_dealer_reviews"
    ),
]

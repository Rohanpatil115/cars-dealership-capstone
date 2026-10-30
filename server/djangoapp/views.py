from django.shortcuts import render

# Create your views here.

import json

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def login_user(request):
    if request.method != "POST":
        return JsonResponse(
            {"error": "Only POST requests are allowed"},
            status=405
        )

    try:
        data = json.loads(request.body)

        username = data.get("username", "").strip()
        password = data.get("password", "")

        if not username or not password:
            return JsonResponse(
                {"error": "Username and password are required"},
                status=400
            )

        user = authenticate(
            request,
            username=username,
            password=password
        )

        if user is None:
            return JsonResponse(
                {"error": "Invalid username or password"},
                status=401
            )

        login(request, user)

        return JsonResponse({
            "message": "Login successful",
            "username": user.username,
            "authenticated": True
        }, status=200)

    except json.JSONDecodeError:
        return JsonResponse(
            {"error": "Invalid JSON request"},
            status=400
        )


@csrf_exempt
def logout_user(request):
    if request.method != "POST":
        return JsonResponse(
            {"error": "Only POST requests are allowed"},
            status=405
        )

    if not request.user.is_authenticated:
        return JsonResponse(
            {"error": "User is not logged in"},
            status=401
        )

    username = request.user.username
    logout(request)

    return JsonResponse({
        "message": "Logout successful",
        "username": username,
        "authenticated": False
    }, status=200)

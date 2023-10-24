from django.urls import path

from .views import (
    api_customer,
    api_list_customer,
    api_list_salespeople,
    api_sales,
    api_salesperson,
)

urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("salespeople/<int:id>", api_salesperson, name="api_salesperson"),
    path("customer/", api_list_customer, name="api_list_customer"),
    path("customer/<int:id>/", api_customer, name="api_customer"),
    path("sales/", api_sales, name="api_sales"),
    path("sales/<int:id>/", api_sales, name="api_sales"),
]

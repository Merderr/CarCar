from django.urls import path

from .api_views import (
    api_customer,
    api_list_customer,
    api_list_salespeople,
    api_sales,
    api_salesperson,
    api_sale,
)


urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("salespeople/<int:id>/", api_salesperson, name="api_salesperson"),
    path("customers/", api_list_customer, name="api_list_customer"),
    path("customers/<int:id>/", api_customer, name="api_customer"),
    path("sales/", api_sales, name="api_sales"),
    path("sales/<int:id>/", api_sale, name="api_sale"),
]

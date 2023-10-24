from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .encoder import SalespersonEncoder, CustomerEncoder, SaleEncoder
from .models import Salesperson, Customer, Sale
import json


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        try:
            salespeople = Salesperson.objects.all()
            return JsonResponse(
                {"Sales_People": salespeople}, encoder=SalespersonEncoder
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"Message": "Salesperson does not exist"})
            response.status_code = 400
            return response
    elif request.method == "POST":
        try:
            content = json.loads(request.body)
            salespeople = Salesperson.objects.create(**content)
            return JsonResponse(salespeople, encoder=Salesperson)
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"}, status=400)


@require_http_methods(["GET", "PUT", "DELETE"])
def api_salesperson(request, id):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=id)
            return JsonResponse(salesperson, encoder=SalespersonEncoder)
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Salesperson does not exist"})
            response.status_code = 400
            return response
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.get(id=id).update(**content)
            return JsonResponse(salesperson, encoder=SalespersonEncoder)
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Salesperson does not exist"})
            response.status_code = 400
            return response
    elif request.method == "DELETE":
        try:
            count, _ = Salesperson.objects.get(id=id).delete()
            return JsonResponse({"deleted": count > 0})
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Salesperson does not exist"})
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        try:
            customers = Customer.objects.all()
            return JsonResponse({"customers": customers}, encoder=CustomerEncoder)
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 400
            return response
    elif request.method == "POST":
        try:
            content = json.loads(request.body)
            customers = Customer.objects.create(**content)
            return JsonResponse(customers, encoder=CustomerEncoder)
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"}, status=400)


@require_http_methods(["GET", "DELETE", "PUT"])
def api_customer(request, id):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse(customer, encoder=CustomerEncoder)
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 400
            return response
    elif request.method == "DELETE":
        try:
            count, _ = Customer.objects.get(id=id).delete()
            return JsonResponse({"deleted": count > 0})
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"}, status=400)
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=id).update(**content)
            return JsonResponse(customer, encoder=CustomerEncoder)
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"}, status=400)


@require_http_methods(["GET", "POST", "DELETE"])
def api_sales(request, id):
    if request.method == "GET":
        try:
            sales = Sale.objects.all()
            return JsonResponse(sales, encoder=SaleEncoder)
        except Sale.DoesNotExist:
            response = JsonResponse({"message": "Sale does not exist"})
            response.status_code = 400
            return response
    elif request.method == "POST":
        try:
            content = json.loads(request.body)
            sale = Sale.objects.create(**content)
            return JsonResponse(sale, encoder=SaleEncoder)
        except Sale.DoesNotExist:
            return JsonResponse({"message": "Does not exist"}, status=400)
    elif request.method == "DELETE":
        try:
            count, _ = Sale.objects.get(id=id).delete()
            return JsonResponse({"deleted": count > 0})
        except Sale.DoesNotExist:
            return JsonResponse({"message": "Does not exist"}, status=400)

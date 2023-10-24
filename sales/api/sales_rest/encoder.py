from .models import AutomobileVO, Salesperson, Customer, Sale
from common.json import ModelEncoder


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["employee_id", "first_name", "last_name"]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number"]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = ["automobile", "sales_person", "customer", "price"]

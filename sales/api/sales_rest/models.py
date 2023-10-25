from django.db import models


class Salesperson(models.Model):
    employee_id = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin


class Sale(models.Model):
    automobile = models.ForeignKey(
        "AutomobileVO", related_name="automobile", on_delete=models.CASCADE
    )
    sales_person = models.ForeignKey(
        "Salesperson", related_name="sales_person", on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        "Customer", related_name="customer", on_delete=models.CASCADE
    )
    price = models.IntegerField()

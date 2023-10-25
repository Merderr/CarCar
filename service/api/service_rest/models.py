from django.db import models


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=200, unique=True)
    sold = models.BooleanField()

    def __str__(self):
        return self.vin


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=25)


class Appointment(models.Model):
    date_time = models.DateTimeField()
    status = models.CharField(max_length=100)
    vin = models.CharField(max_length=100, unique = True)
    reason = models.CharField(max_length=200)
    customer = models.CharField(max_length=200)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )
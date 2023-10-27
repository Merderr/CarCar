from .models import AutomobileVO, Appointment, Technician
from common.json import ModelEncoder


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "customer",
        "status",
        "vin",
        "reason",
    ]

    def get_extra_data(self, o):
        return {"technician": o.technician.first_name + " " + o.technician.last_name}


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]

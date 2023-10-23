from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO, Appointment, Technician
from common.json import ModelEncoder

# Create your views here.
class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold", "import_href"]

class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "customer",
        "status",
        "vin",
        "reason",
    ]

    def get_extra_data(self, o):
        return {"technician": o.technician.employee_id}

@require_http_methods(["GET", "POST"])
def api_bins(request):
    """
    Collection RESTful API handler for Bin objects in
    the wardrobe.

    GET:
    Returns a dictionary with a single key "bins" which
    is a list of the closet name, bin number, and bin size
    for the bin, along with its href and id.

    {
        "bins": [
            {
                "id": database id for the bin,
                "closet_name": bin's closet name,
                "bin_number": the number of the bin,
                "bin_size": the size of the bin,
                "href": URL to the bin,
            },
            ...
        ]
    }

    POST:
    Creates a bin resource and returns its details.
    {
        "closet_name": bin's closet name,
        "bin_number": the number of the bin,
        "bin_size": the size of the bin,
    }
    """
    if request.method == "GET":
        bin = Bin.objects.all()
        return JsonResponse(
            {"bins": bin},
            encoder=BinEncoder,
        )
    else:
        content = json.loads(request.body)
        bin = Bin.objects.create(**content)
        return JsonResponse(
            bin,
            encoder=BinEncoder,
            safe=False,
        )
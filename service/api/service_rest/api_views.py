from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO, Appointment, Technician
from .encoders import AutomobileVODetailEncoder, TechnicianListEncoder, AppointmentDetailEncoder


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        try:
            technicians = Technician.objects.all()
            return JsonResponse(
                {"technicians": technicians},
                encoder=TechnicianListEncoder,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "No technicians found"},
                status=404,
            )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_technician(request, pk):
    count, _ = Technician.objects.filter(id=pk).delete()
    if count > 0:
        code = 200
    else:
        code = 404
    return JsonResponse(
        {"deleted": count > 0},
        status=code,
    )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {
                "appointments": appointments,
            },
            encoder=AppointmentDetailEncoder,
        )
    else:
        content = json.loads(request.body)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_appointment(request, pk):
    count, _ = Appointment.objects.filter(id=pk).delete()
    if count > 0:
        code = 200
    else:
        code = 404
    return JsonResponse(
        {"deleted": count > 0},
        status=code,
    )


@require_http_methods(["PUT"])
def api_cancel_appointment(request, pk):
    try:
        appointment = Appointment.objects.get(id=pk)
        setattr(appointment, "status", "cancelled")
        appointment.save()
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    except Appointment.DoesNotExist:
        response = JsonResponse({"message": "Does not exist"})
        response.status_code = 404
        return response


@require_http_methods(["PUT"])
def api_finish_appointment(request, pk):
    try:
        appointment = Appointment.objects.get(id=pk)
        setattr(appointment, "status", "finished")
        appointment.save()
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    except Appointment.DoesNotExist:
        response = JsonResponse({"message": "Does not exist"})
        response.status_code = 404
        return response


@require_http_methods(["GET"])
def api_list_automobileVO(request):
    if request.method == "GET":
        try:
            automobiles = AutomobileVO.objects.all()
            return JsonResponse(
                {"automobiles": automobiles},
                encoder=AutomobileVODetailEncoder,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "No automobiles found"},
                status=404,
            )

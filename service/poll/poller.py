import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

from service_rest.models import AutomobileVO


def poll(repeat=True):
    while True:
        print("Service poller polling for data")
        try:
            response = requests.get(
                "http://project-beta-inventory-api-1:8000/api/automobiles/"
            )
            content = json.loads(response.content)
            for automobile in content["autos"]:
                AutomobileVO.objects.update_or_create(
                    import_href=automobile["href"],
                    vin=automobile["vin"],
                    sold=automobile["sold"],
                )
        except Exception as e:
            print(e, file=sys.stderr)

        if not repeat:
            break

        time.sleep(10)


if __name__ == "__main__":
    poll()

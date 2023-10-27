# CarCar

Team:

- Jesse Zhang - Service
- Hamza Ahmed - Sales

## Design
    The back end will be crafted with django, while front end will use React. Front-end design will
    be supplemented with the use of bootstrap.
## Service microservice
Models
    Technician
        first_name
        last_name
        employee_id

    AutomobileVO
        import_href
        vin
        sold

    Appointment
        date_time
        reason
        status
        vin
        customer
        technician (Technician FK)

Integration with inventory
    A poller will pull information from the inventory api's automobiles and create/update the AutomobileVO model in the service api


## Sales microservice

Explain your models and integration with the inventory
microservice, here.

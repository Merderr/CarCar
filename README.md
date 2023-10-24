# CarCar

Team:

- Jesse Zhang - Service
- Hamza Ahmed - Sales

## Design

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
    A poller will pull information from the inventory api's autombiles and create/update the AutomobileVO model in the service api


## Sales microservice

Explain your models and integration with the inventory
microservice, here.

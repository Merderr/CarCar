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

Models

Salesperson:

Role: The hero of the sales microservice, the salesperson model represents the individuals responsible for making sales happen. They handle interactions with customers, create and manage sales transactions, and ensure a delightful buying experience.
Attributes: This model includes details such as the salesperson's full name and employee ID.

Customer:

Role: The other protagonist, the customer model represents those who bring their desires (and wallets) to the stage. Customers place orders, interact with the sales process, and expect a seamless experience.
Attributes: Customer details such as name, address, and contact information are key. You might also store their order history for personalized service.

AutomobileVO:

Role: The supporting actor, the AutomobileVO model represents the vehicles involved in the sales transactions. It's a value object because it carries information but doesn't have a lifecycle of its own.
Attributes: Details about the automobile such as vin and if its marked sold or not.

Sale:

Role: The main plot, the Sale model ties everything together. It's the record of a successful transaction between a salesperson and a customer, involving one or more automobiles.
Attributes: Information like the sale price, references to the involved salesperson, customer, and automobiles.

Integration with Inventory Microservice:

When a sale is initiated, the sales microservice communicates with the inventory microservice to check if the selected automobiles are in sold or unsold status. The inventory microservice, in turn, updates the stock and communicates back to the sales microservice.

This real-time communication prevents the sales microservice from attempting to sell vehicles that are sold. It ensures that the inventory is always accurate and up-to-date, avoiding potential customer disappointments and maintaining a harmonious balance in the microservices orchestra.

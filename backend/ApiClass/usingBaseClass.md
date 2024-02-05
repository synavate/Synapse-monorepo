## Creating a FastAPI Service using BaseService

To create a FastAPI service using the `BaseService` class, follow these steps:

1. Import the `BaseService` class from your Python module.
2. Create an instance of the `BaseService` class with the following parameters:
   - `service_name` (str): The name of your service.
   - `version` (str): The version of your service.
   - `description` (str): A description of your service.
3. Customize the `configure_routes` method to define your API routes and logic.
4. Optionally, customize other methods or add additional functionality as needed.
5. Call the `run` method to start the FastAPI application.

Here's an example of how to create a FastAPI service using `BaseService`:

```python
from ApiClass import BaseService

# Create an instance of BaseService
service_name = "MyService"
version = "1.0"
description = "API for My Service"
base_service = BaseService(service_name, version, description)

# Customize the configure_routes method to define your API endpoints and logic

# Start the FastAPI application
base_service.run()
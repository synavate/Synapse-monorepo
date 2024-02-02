from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import uvicorn

class BaseService:
    def __init__(self, service_name: str, version: str, description: str):
        self.app = FastAPI(title=f"{service_name} Service", version=version, description=description)
        self.service_name = service_name
        self.load_env()
        self.configure_routes()

    def load_env(self):
        load_dotenv()

    def configure_routes(self):
        @self.app.post(f"/{self.base_url}/{self.service_name}/")
        async def process_request(request: Request, input_data: BaseModel):
            """
            Process the request and return the response from the {service_name}.
            Validates the input data based on the InputDataModel.
            """
            # Here, you would add your logic to process the input data, interact with Kafka, etc.
            # This example simply echoes the input data for demonstration purposes.
            return {"service": request.url.path, "processed_data": input_data.dict()}

    def run(self, host: str = "0.0.0.0", port: int = 8000):
        uvicorn.run(self.app, host=host, port=port)

if __name__ == "__main__":
    base_url = os.getenv("baseURL")
    service_name = "YourServiceName"  # Inject your service name here
    version = "1.0"
    description = "API for Your Service"

    base_service = BaseService(service_name, version, description)
    base_service.run()

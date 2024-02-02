from mymodule import BaseService
from fastapi import HTTPException

#@FIXME NEED TO FIX THIS

# Define a custom data processing function
def process_data(input_data):
    # Replace this with your actual data processing logic
    processed_data = f"Processed: {input_data}"
    return processed_data

# Create a custom exception handler
async def custom_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"error": "An error occurred during data processing"},
    )

# Create a DataProcessingService class
class DataProcessingService(BaseService):
    def configure_routes(self):
        @self.app.post(f"/{self.base_url}/{self.service_name}/process/")
        async def process_data_route(request, input_data: str):
            try:
                result = process_data(input_data)
                return {"service": self.service_name, "processed_data": result}
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    service_name = "DataProcessing"
    version = "1.0"
    description = "API for Data Processing Service"

    data_processing_service = DataProcessingService(service_name, version, description)

    # Add the custom exception handler
    data_processing_service.app.add_exception_handler(HTTPException, custom_exception_handler)

    # Start the Data Processing Service
    data_processing_service.run()
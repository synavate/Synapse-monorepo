# Use the official Python 3.9 image as a parent image
FROM python:3.9-slim-buster

# Set the working directory
WORKDIR /workspace

# Copy the requirements file and install Python dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your project's code into the container
COPY . .

# Use a non-root user for security best practices
RUN useradd -m synapse-core && \
    chown -R synapse-core /workspace
USER synapse-core

# Expose the port your app runs on
EXPOSE 8000

# Command to run your app
CMD ["python", "app.py"]
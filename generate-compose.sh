#!/bin/bash

# Define the base directory containing service directories
BASE_DIR="../"
# Define the base port number
BASE_PORT=3069

# Start of the docker-compose.yml file
cat <<EOF >docker-compose.yml
version: '3.8'
services:
EOF

# We increase port number....
PORT_COUNTER=0

for SERVICE_DIR in $BASE_DIR/*; do
  if [ -d "$SERVICE_DIR" ]; then
    # Extract the service name from the directory path
    SERVICE_NAME=$(basename "$SERVICE_DIR")

    # Calculate the service's port number
    SERVICE_PORT=$((BASE_PORT + PORT_COUNTER))

    # Append the service definition to the docker-compose.yml file
    cat <<EOF >>docker-compose.yml
  $SERVICE_NAME:
    build:
      context: ./$SERVICE_DIR
      dockerfile: Dockerfile
    ports:
      - "$SERVICE_PORT:3000"
EOF

    # Increment the port counter for the next service
    ((PORT_COUNTER++))
  fi
done

echo "docker-compose.yml has been generated."

# Using Poetry for Dependency Management
Poetry is used to manage Python dependencies and virtual environments in our Python-based services. Here's how to use Poetry across the services:

## Installation
Ensure Poetry is installed on your system. If not, install it by following the instructions at [Poetry's official website](https://python-poetry.org/docs/#installation).

## Initializing a New Service
To initialize a new service with Poetry:
1. Navigate to the service directory: cd services/<serviceName>
2. Run poetry init and follow the prompts to create a new pyproject.toml file.

## Adding Dependencies
To add a new dependency:
1. Navigate to the service directory: cd services/<serviceName>
2. Add a dependency: poetry add <package-name>

## Installing Dependencies
To install all dependencies for a service:
1. Navigate to the service directory: cd services/<serviceName>
2. Run poetry install

## Running Tests
To run tests using Poetry:
1. Navigate to the service directory: cd services/<serviceName>
2. Run poetry run pytest tests/

## Linking Services
If services share common dependencies or you need to ensure consistent versions across services, consider creating a shared library or use consistent versioning in each pyproject.toml file.
"""
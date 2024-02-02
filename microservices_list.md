# Synapse Microservices

The services specified in the script for the `synapse` project include a mix of backend and frontend services, each serving a different purpose in the application. Here is a list of all the services:

-----------------
## CORE OPERATIONS: Kong and Extensions

1. **APIGatewayService**: Acts as the entry point for the application, routing requests to other services.
   1. Using SwaggerAPI and OpenAPI standard to generate schema.
   2. Kafka Event Streaming and Queing.
   3. Incorporating K8's for scaling as we head toward a stable release.

-----------------

## Backend Service Libraries (Not exhaustible)

**Backend Logic & Testing:** Python, Poetry, PyEnv, pyTest.
**ML Model Libraries:** Scikitlearn, pyG, PyTorch.
**MLOps:** WandB, MLFlow, Live Monitoring TBC, Python Scripting for retraining.
**LLM Orchestration:** LLamaIndex & Langchain.
**LLMOps:** Humanloop, CI LLM Evals

**Application server:** FastAPI based implementation > API Gateway

-----------------

## Backend DB and Caching

**User Login, Query Data, Model Data:** MongoDB (Testing)
**Caching:** REDIS
**VectorDB:** QDrant
**GraphDB:** Memgraph, Neo4J (TBD)

-----------------

## Frontend UserUI & Data Viz

**User Account Service & Vault:** Investigating Verida at the moment or Spruce, or alternative. Strip all PII or IP from data and store securely.
**User UI:** NextJS Framework using Typescript for type safety.
**Data Viz:** D3 Data Visualization with Memgraph Orb (Custom CSS)

**Application Server:** Express Based TS API

1. **KnowledgeGraphGen**: Open Research Problem: Probably handles the generation or management of a knowledge graph, which could involve processing and organizing information into a network of entities and their interrelations. ✅

2. **MLInferenceService**: Handles machine learning model inferences, providing predictions or analyses based on input data.

3. **LLMProcessingService**: Likely handles processing for Large Language Models (LLMs), which could involve natural language understanding, generation tasks, etc. ✅

4. **BusinessLobsterService**: Generates business-related reports, possibly aggregating data from various sources and presenting insights.

5. **DataProcessingService**: Responsible for preprocessing data, which may include cleaning, normalizing, transforming, and preparing data for analysis or model training. ✅

6. **DataPipelineService**: Manages data storage, possibly interfacing with databases or other storage solutions to save and retrieve application data.

## Frontend: TS, npm, nvm, Jest

1. **UserAccountService**: Manages user accounts, including authentication, user profiles, and related functionalities.

2. **UserDashboard**: A frontend service, likely a web application or user interface, where users interact with the system. It's built using Next.js (React framework).

3. **DataVizService**: Focuses on data visualization, creating charts, graphs, and other visual representations of data.
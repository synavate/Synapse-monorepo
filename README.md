# Synapse v0.0.3 ~ 08/02/2024 - Service Refactor

Please visit the build folder for instructions on deploying the services into Dockerfiles

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/synavate/synapse-monorepo/CI/main?style=flat-square&logo=github)
![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat-square&logo=python)
![PyTorch](https://img.shields.io/badge/PyTorch-1.8-blue?style=flat-square&logo=pytorch)
![MLFlow](https://img.shields.io/badge/MLFlow-1.14-blue?style=flat-square&logo=apache)
![Next.js](https://img.shields.io/badge/Next.js-10.0-black?style=flat-square&logo=next.js)
![D3.js](https://img.shields.io/badge/D3.js-6.6-yellow?style=flat-square&logo=d3.js)*/

# v0.03 Architecture Summary - 09/02/2024

### CORE OPERATIONS:

- **APIGatewayService**: Entry point for the application, routing requests to other services using NesJS Microservice API Gateway pending Kong, and Kubernetes for scaling.

### Backend Service Libraries
- **Backend Logic & Testing**: Python, Poetry, PyEnv, pyTest.
- **ML Model Libraries**: Scikitlearn, pyG, PyTorch.
- **MLOps**: WandB, MLFlow, Live Monitoring TBC, Python Scripting for retraining.
- **LLM Orchestration**: LLamaIndex & Langchain.
- **LLMOps**: Humanloop, CI LLM Evals.
- **Application Server**: FastAPI > API Gateway.

### Backend DB and Caching
- **Databases**: MongoDB (Testing), REDIS, QDrant, Memgraph, Neo4J (TBD).
=======
- ** Cloudflare AI Gateway forked from Portkey**

=======


### Frontend UserUI & Data Viz
- **User Account & Security**: Investigating Verida, Spruce; secure data storage.
- **User UI**: NextJS with Typescript.
- **Data Visualization**: D3 with Memgraph Orb (Custom CSS).
- **Application Server**: Express Based TS API.

### Key Services
- **KnowledgeGraphGen**: Manages knowledge graph generation/management.
- **MLInferenceService**: Provides machine learning model inferences.
- **LLMProcessingService**: Processes tasks for Large Language Models.
- **BusinessLobsterService**: Generates business-related reports.
- **DataProcessingService**: Handles data preprocessing.
- **DataPipelineService**: Manages data storage solutions.

### Frontend Technologies
- **UserAccountService**: Manages user accounts and authentication.
- **UserDashboard**: Built using Next.js; user interface for system interaction.
- **DataVizService**: Creates visual representations of data.
  
### Shenanigans Service (Humerus - oh wait, not in the brain) - Always

### Deployment
- **Google Cloud Platform:** Run, Build, Deploy, Storage (Exhaustive list TBC by @Audiato)


- The synavate core has a tonne developing in our key relationships and preparing our codebase.
- The more that we explore, the more we recognise there is to do before we can release to the Open Source community.
  
### Regardless: Beginning to transport code from experimental repositories. 
Goal: A minimal execution demonstrating the vision of Synapse as our initial product.

- Create repo and add essential minimum componenents ✅
- Finalize codebase in Synapse repo
- Prepare GCP Deployment Environment
- Integrate code cleaning via GH Actions
- Migrate code to deployment repo
- Run minimal test suite on each service + 1 x End - End (Automate tests for deployment)
- Push code to staging
- Push code to prod


Details as the project evolves closer to it's goal.

----------------------
**core@synapse.tech or ask to join our Slack.**

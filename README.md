# Synapse v0.0.3 ~ 08/02/2024 - Service Refactor 🫶
```markdown
***************************
  Synavate Tech: Synapse
  ___________  ___________
 /           \/           \
|  [v0.0.2] --> [v0.0.3]  |
 \___________/\___________/
     APACHE-LICENSE 2.0
     github.com/synavate
***************************
```
#### Project is in Early Development #### 
#### Interested collaborators core@synavate.tech ####


Please visit the build folder for instructions on deploying the services into Dockerfiles

![Static Analysis Status Badge](https://github.com/synavate/Synapse-monorepo/actions/workflows/code-quality.yml/badge.svg?branch=develop&event=status)

# v0.02 Architecture Summary

### CORE OPERATIONS: Gateway and Extensions

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
**core@synavate.tech or ask to join our Slack.**

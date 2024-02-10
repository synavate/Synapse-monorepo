import os
from qdrant_client import QdrantClient
from dotenv import load_dotenv

load_dotenv('../db.env')


qdrant_client = QdrantClient(
    url="https://b94c5565-cf5e-446f-b488-9282179598b8.us-east4-0.gcp.cloud.qdrant.io:6333", 
    api_key=os.getenv("QDRANT_API_KEY"),
)
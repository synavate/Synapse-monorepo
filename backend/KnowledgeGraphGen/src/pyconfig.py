import os
from dotenv import load_dotenv
from dataclasses import dataclass

load_dotenv()

@dataclass
class EnvVAR:
    MEM_URI: str = os.getenv("MEM_URI")
    MEM_USER: str = os.getenv("MEM_USER")
    MEM_AUTH: str = os.getenv("MEM_AUTH")
    RAW_DATA_JSON: str = os.getenv("RAW_DATA_JSON")



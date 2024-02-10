from pydantic import BaseModel

class Document(BaseModel):
    author: str
    text: str
    timestamp: str

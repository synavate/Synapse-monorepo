import logging
import ecs_logging
from ecs_logging import StdlibFormatter
from elasticsearch import Elasticsearch
from datetime import datetime

# Get the Logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.ERROR)

# Add an ECS formatter to the Handler
handler = logging.StreamHandler()
handler_file = logging.FileHandler(f"../logs/{logger}-{datetime.now()}.log")
handler.setFormatter(ecs_logging.StdlibFormatter())
handler_file.setFormatter(ecs_logging.StdlibFormatter())
logger.addHandler(handler)
logger.addHandler(handler_file)

# Emit a log!
logger.debug("Example message!", extra={"http.request.method": "get"})


def connect_to_es():
    # Create the client instance
    client = Elasticsearch(
        cloud_id=CLOUD_ID,
        basic_auth=("elastic", ELASTIC_PASSWORD)
    )

    # Successful response!
    return client

def index_doc(docSchema)
doc = {
    'author': 'author_name',
    'text': 'Interesting content...',
    'timestamp': datetime.now(),
}
resp = es.index(index="test-index", id=1, document=doc)
print(resp['result'])




    


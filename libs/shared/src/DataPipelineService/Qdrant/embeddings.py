from llama_index.embeddings import OpenAIEmbedding
from llama_index import ServiceContext, set_global_service_context, Document
from llama_index.text_splitter import SentenceSplitter
from llama_index.extractors import TitleExtractor
from llama_index.ingestion import IngestionPipeline, IngestionCache

# create the pipeline with transformations
pipeline = IngestionPipeline(
    transformations=[
        SentenceSplitter(chunk_size=35, chunk_overlap=0),
        TitleExtractor(),
        OpenAIEmbedding(embed_batch_size=10,model="text-embedding-3-small"),
    ]
)

# run the pipeline
nodes = pipeline.run(documents=[Document.example()])



# We break apart our input text into chunks
embeddings = embed_model.get_text_embedding(
    "Open AI new Embeddings models is great."
)
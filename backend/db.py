import chromadb
from chromadb.config import Settings
import os

# Ensure the db directory exists
DB_DIR = os.path.join(os.path.dirname(__file__), "chroma_db")
if not os.path.exists(DB_DIR):
    os.makedirs(DB_DIR)

# Initialize persistent client
client = chromadb.PersistentClient(path=DB_DIR)

# Get or create the collection for solutions
# This is where we will store our "Knowledge Base"
solutions_collection = client.get_or_create_collection(
    name="solutions",
    metadata={"hnsw:space": "cosine"} # Cosine similarity for semantic search
)

def get_db():
    return solutions_collection

from db import get_db
import chromadb

def seed_database():
    print("🌱 Seeding database...")
    collection = get_db()
    
    # Check if empty
    if collection.count() > 0:
        print("Database already has data. Skipping seed.")
        return

    # Initial Knowledge Base
    documents = [
        "The error logs indicate a Worker process crash which is often resolved by a clean restart of the service.",
        "High latency and timeout errors often suggest Redis cache fragmentation or network saturation.",
        "500 Internal Server Error with database connection refused usually means the PGSQL service is down or credentials changed.",
        "CORS errors in the console mean the backend configuration needs to allow the frontend origin.",
    ]
    
    metadatas = [
        {"title": "Restart Nginx Service", "type": "process_crash"},
        {"title": "Clear Redis Cache", "type": "performance"},
        {"title": "Check Database Service", "type": "connection"},
        {"title": "Fix CORS Configuration", "type": "config"},
    ]
    
    ids = ["sol_1", "sol_2", "sol_3", "sol_4"]

    collection.add(
        documents=documents,
        metadatas=metadatas,
        ids=ids
    )
    
    print(f"✅ Setup complete! Added {len(ids)} solutions to knowledge base.")

if __name__ == "__main__":
    seed_database()

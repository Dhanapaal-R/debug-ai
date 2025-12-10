from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from db import get_db

app = FastAPI(title="Debug AI Backend")

class AnalyzeRequest(BaseModel):
    query: str

class Solution(BaseModel):
    id: str
    title: str
    description: str
    match_score: float

@app.get("/")
def read_root():
    return {"status": "online", "service": "Debug AI Backend"}

@app.post("/analyze")
def analyze_issue(request: AnalyzeRequest):
    collection = get_db()
    
    # Query ChromaDB
    # n_results=3 means we want the top 3 closest matches
    results = collection.query(
        query_texts=[request.query],
        n_results=3
    )

    # Transform results to our frontend format
    # ChromaDB returns lists of lists (because we can query multiple texts at once)
    matches = []
    
    if results["ids"] and results["ids"][0]:
        for i in range(len(results["ids"][0])):
            distance = results["distances"][0][i]
            print(f"DEBUG: Query='{request.query}' Result='{results['documents'][0][i][:20]}...' Distance={distance}")
            
            # STRICTEST Threshold Check: 
            # Debugging revealed distances are smaller than expected.
            # Lowering to 0.7. If the distance is > 0.7, it's not a match.
            if distance > 0.7:
                print(f"DEBUG: Skipping result because distance {distance} > 0.7")
                continue

            score = max(0, (1 - (distance / 2)) * 100)
            
            matches.append({
                "id": results["ids"][0][i],
                "title": results["metadatas"][0][i].get("title", "Unknown Solution"),
                "description": results["documents"][0][i],
                "matchScore": round(score, 1)
            })
            
    return {"matches": matches}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

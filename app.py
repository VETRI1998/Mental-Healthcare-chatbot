from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# Allow frontend connections
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or restrict to specific frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ⚠️ Use your OpenRouter API key securely (load from .env in production)
api_key= "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"

def chat_with_bot(message: str) -> str:
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": [
            {
                "role": "system",
                "content": "You're a chill and casual AI friend. Keep replies short, friendly, and human-like. Don’t act like a therapist or teacher unless asked. Just talk like a normal guy."
            },
            {
                "role": "user",
                "content": message
            }
        ]
    }

    response = requests.post(url, headers=headers, json=payload)

    try:
        data = response.json()
        if response.status_code == 200 and "choices" in data:
            return data["choices"][0]["message"]["content"]
        else:
            return f"API Error: {data}"
    except Exception as e:
        return f"JSON Decode Error: {str(e)}\nRaw Response: {response.text}"

@app.post("/chat")
async def chat(request: Request):
    body = await request.json()
    user_message = body.get("message", "")
    bot_reply = chat_with_bot(user_message)
    return {"response": bot_reply}

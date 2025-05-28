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
                "content": "start the coversation with your name Dailo gpt,keep reply short and quick,You're a chill and casual Dailo gpt AI doctor .you're a licensed therapist, Keep reply in one line, friendly, and human-like. Just talk like a healthcare doctor."
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

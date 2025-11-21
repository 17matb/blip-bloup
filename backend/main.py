from db import supabase
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "api is fine"}


@app.post("/ping")
def ping(request: Request):
    ip = request.client.host  # pyright: ignore[reportOptionalMemberAccess]
    _ = supabase.table("pings").insert({"ip_address": ip}).execute()
    return {"message": f"successfully added {ip} to db"}


@app.get("/pings")
def get_pings(page: int = 1, size: int = 3):
    start = (page - 1) * size
    end = start + size - 1
    result = (
        supabase.table("pings")
        .select("*")
        .order("timestamp")
        .range(start, end)
        .execute()
    )
    return result.data

from fastapi import FastAPI, APIRouter
from pydantic import BaseModel

app = FastAPI()
router = APIRouter(prefix="/api")

app.include_router(router)


@router.get("/demo")
def read_root(a: int = 0):
    return {"a": a}


class User(BaseModel):
    username: str
    password: str


@router.post("/demo")
def create_user(user: User):
    return {"username": user.username, "password": user.password}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "demo:app",
        host="0.0.0.0",
        port=9000,
        reload=True,
    )

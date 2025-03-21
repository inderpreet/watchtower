from typing import Annotated
from decimal import Decimal

from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

from fastapi import Depends, FastAPI, HTTPException, Query
from sqlmodel import Field, Session, SQLModel, create_engine, select


class Part(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    description: str = Field(index=True)
    price: Decimal | None = Field(default=None, index=True, decimal_places=2)
    url1: str = Field(index=True)
    url2: str = Field(index=True)
    type: str = Field(index=True)
    active: bool = Field(index=True)

sqlite_file_name = "watchtower.db"
sqlite_url = f"sqlite:///./database/{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.get("/")
def root():
    return {"message":"FastAPI running"}

@app.post("/parts/")
def create_part(part: Part, session: SessionDep) -> Part:
    session.add(part)
    session.commit()
    session.refresh(part)
    return part


@app.get("/parts/")
def read_parts(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[Part]:
    parts = session.exec(select(Part).offset(offset).limit(limit)).all()
    return parts


@app.get("/parts/{part_id}")
def read_part(part_id: int, session: SessionDep) -> Part:
    part = session.get(Part, part_id)
    if not part:
        raise HTTPException(status_code=404, detail="Part not found")
    return part


@app.delete("/parts/{hero_id}")
def delete_part(part_id: int, session: SessionDep):
    part = session.get(Part, part_id)
    if not part:
        raise HTTPException(status_code=404, detail="Part not found")
    session.delete(part)
    session.commit()
    return {"ok": True}

on_startup()

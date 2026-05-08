from pydantic import BaseModel


class ThreadMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    session_id: str | None = None
    instructions: str | None = None
    thread: list[ThreadMessage] = []


class ChatResponse(BaseModel):
    response: str
    session_id: str
    sources: list[str] = []


class IngestResponse(BaseModel):
    documents_processed: int
    chunks_created: int
    status: str


class Skill(BaseModel):
    name: str
    category: str
    level: str = ""  # beginner, intermediate, advanced, expert


class Project(BaseModel):
    title: str
    description: str
    tech: list[str] = []
    link: str = ""
    github: str = ""


class Certificate(BaseModel):
    name: str
    issuer: str
    date: str
    credential_url: str = ""
    logo: str = ""


class ProfileData(BaseModel):
    name: str
    title: str
    tagline: str
    photo: str = ""
    about: list[str] = []
    skills: list[Skill] = []
    projects: list[Project] = []
    certificates: list[Certificate] = []
    resume_url: str = ""
    social: dict[str, str] = {}

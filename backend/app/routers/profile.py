from fastapi import APIRouter
from pathlib import Path
import yaml

from app.models.schemas import ProfileData

router = APIRouter()

PROFILE_PATH = Path("/app/data/profile.yaml")


def load_profile() -> ProfileData:
    with open(PROFILE_PATH) as f:
        data = yaml.safe_load(f)
    return ProfileData(**data)


@router.get("/", response_model=ProfileData)
async def get_profile():
    return load_profile()

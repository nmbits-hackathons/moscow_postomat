import datetime
from typing import List, Optional

from pydantic import BaseModel
from sqlalchemy import (
    Column,
    String,
    Integer
)
from sqlalchemy.ext.declarative import declarative_base
import pydantic

from database_adapter import engine

Base = declarative_base()


class DataAddress(Base):
    __tablename__ = 'Adresses'

    id = Column(Integer, primary_key=True)

    address_str = Column(String, unique=True)
    geoposition = Column(String)


Base.metadata.create_all(engine)


# _________________________________ TODO здесь мы дублируем модели, как иначе сделать хз, мб лучше можно

class BaseAddress(BaseModel):
    address_str: str
    geoposition: str

    class Config:
        orm_mode = True

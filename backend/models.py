from typing import List

import optional as optional
from pydantic import BaseModel


class Places(BaseModel):
    auto: bool = False
    kiosk: float
    sports: float
    library: float
    culture_house: float
    multifunctional: float
    underground: float
    house: float  # многоквартирные дома


class Sector(BaseModel):  # возможные координаты сектора по которому мы ищем
    active: bool = False
    coordinates: str
    radius: int


class Filters(BaseModel):  # характеристики транспорта
    places: Places
    district: List[str]
    region: List[str]
    model_keyword: str = "k-means"
    sector: Sector = None

    class Config:
        orm_mode = True

from typing import List, Optional

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
    districts: List[str] = []
    areas: List[str] = []
    model_keyword: str = "math_model"
    sector: Sector = None
    postamat_count: int = 10
    coverage : float
    radius: Optional[float]

    class Config:
        orm_mode = True

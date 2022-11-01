import json
from fastapi import FastAPI, UploadFile
import uvicorn
from starlette.middleware.cors import CORSMiddleware

from models import Filters

description = """
Рекомендательный сервис
для определения
оптимальных мест
размещения постаматов в
рамках проекта
«Московский постамат»
"""

app = FastAPI(title="Moscow Postamat API",
              description=description,
              version="1.0.3", docs_url="/", )

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"])

test_points = {"points":
    [
        {
            "id": 1,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "theatre",  # тип - кинотеатр, киоск или другое
            "indicator": 9.3,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.834472,37.65805",
                "address_string": "пр-кт. Мира, д. 188 Б, к. 1, Москва"
            },
            "square": 54804.10,  # площадь помещения float
            "year": 2014,  # год ( видимо постройки)
            "number of floors": 58,  # этажи
            "number of entrances": 1,  # количество подъездов
            "number_of_apartments": 370,  # количество подъездов

        },
        {
            "id": 2,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "kiosk",  # тип - кинотеатр, киоск или другое
            "indicator": 6.2,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.835483,37.658338",
                "address_string": "пр-кт. Мира, д. 188Б, к. 3, Москва"
            },
            "square": 53253.20,  # площадь помещения float
            "year": 2015,  # год ( видимо постройки)
            "number of floors": 58,  # этажи
            "number of entrances": 1,  # количество подъездов
            "number_of_apartments": 356,  # количество подъездов

        },
        {
            "id": 3,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "house",  # тип - кинотеатр, киоск или другое
            "indicator": 4.2,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.7984977,37.5207235",
                "address_string": "пер. Чапаевский, д. 3, Москва"
            },
            "square": 256740.60,  # площадь помещения float
            "year": 2006,  # год ( видимо постройки)
            "number of floors": 57,  # этажи
            "number of entrances": 14,  # количество подъездов
            "number_of_apartments": 992,  # количество подъездов

        },
        {
            "id": 4,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "house",  # тип - кинотеатр, киоск или другое
            "indicator": 2.3,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.723592,37.527256",
                "address_string": "ул. Мосфильмовская, д. 8, Москва"
            },
            "square": 137500.80,  # площадь помещения float
            "year": 2011,  # год ( видимо постройки)
            "number of floors": 53,  # этажи
            "number of entrances": 2,  # количество подъездов
            "number_of_apartments": 564,  # количество подъездов

        },
        {
            "id": 5,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "library",  # тип - кинотеатр, киоск или другое
            "indicator": 4.1,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.71518,37.506612",
                "address_string": "ул. Мосфильмовская, д. 70, Москва"
            },
            "square": 341272.69,  # площадь помещения float
            "year": 2006,  # гд ( видимо постройки)
            "number of floors": 50,  # этажи
            "number of entrances": 7,  # количество подъездов
            "number_of_apartments": 1046,  # количество подъездов

        },

        {
            "id": 6,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "multifunctional_center",  # тип - кинотеатр, киоск или другое
            "indicator": 7.5,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.806521,37.4497704",
                "address_string": "ул. Авиационная, д. 79, к. 1, Москва"
            },
            "square": 50864.40,  # площадь помещения float
            "year": 2003,  # гд ( видимо постройки)
            "number of floors": 49,  # этажи
            "number of entrances": 1,  # количество подъездов
            "number_of_apartments": 242,  # количество подъездов

        },
        {
            "id": 7,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "house",  # тип - кинотеатр, киоск или другое
            "indicator": 3.2,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.8025345,37.5918826",
                "address_string": "ул. Новодмитровская, д. 2, к. 7, Москва"
            },
            "square": 51636.10,  # площадь помещения float
            "year": 2018,  # гд ( видимо постройки)
            "number of floors": 49,  # этажи
            "number of entrances": 2,  # количество подъездов
            "number_of_apartments": 419,  # количество подъездов

        },
        {
            "id": 8,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "house",  # тип - кинотеатр, киоск или другое
            "indicator": 5.9,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.661358,37.5093789",
                "address_string": "пр-кт. Ленинский, д. 111, к. 1, Москва"
            },
            "square": 133432.40,  # площадь помещения float
            "year": 2010,  # гд ( видимо постройки)
            "number of floors": 48,  # этажи
            "number of entrances": 4,  # количество подъездов
            "number_of_apartments": 646,  # количество подъездов

        },
        {
            "id": 9,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "library",  # тип - кинотеатр, киоск или другое
            "indicator": 4.1,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.780774,37.449188",
                "address_string": "пр-кт. Маршала Жукова, д. 78, Москва"
            },
            "square": 83899.20,  # площадь помещения float
            "year": 2011,  # гд ( видимо постройки)
            "number of floors": 48,  # этажи
            "number of entrances": 1,  # количество подъездов
            "number_of_apartments": 345,  # количество подъездов

        },
        {
            "id": 10,
            "title": "test",  # название пока опционально, если это особенный объект,
            "description": "str - optional",  # описание, пока не добавляем
            "type": "library",  # тип - кинотеатр, киоск или другое
            "indicator": 1.0,  # оценка места с точки зрения системы
            "placement": {
                "region": "test",  # Административный округ
                "district": "test",  # Район
                "coordinates": "55.8034214,37.5912477",
                "address_string": "ул. Новодмитровская, д. 2, к. 5, Москва"
            },
            "square": 44694.30,  # площадь помещения float
            "year": 2018,  # гд ( видимо постройки)
            "number of floors": 47,  # этажи
            "number of entrances": 1,  # количество подъездов
            "number_of_apartments": 431,  # количество подъездов

        },

    ],
}


@app.post("/get_postamats/", tags=["тестовая ручка"])
def test(filters: Filters):
    return test_points


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3333)

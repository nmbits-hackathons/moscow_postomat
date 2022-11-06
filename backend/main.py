import json
from fastapi import FastAPI, UploadFile
import uvicorn
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import FileResponse
from core.coverage import make_result

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
              version="1.0.3", docs_url="/")

origins = ["*"]

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
                "area": "test",  # Административный округ
                "district": "test",  # Район,
                "radius": 0,
                "coordinates": "55.834472,37.65805",
                "address_string": "пр-кт. Мира, д. 188 Б, к. 1, Москва"
            },
            "square": 54804.10,  # площадь помещения float
            "year": 2014,  # год ( видимо постройки)
            "number of floors": 58,  # этажи
            "number of entrances": 1,  # количество подъездов
            "number_of_apartments": 370,  # количество подъездов
            "coverage": 21

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
                "radius" : 5,
                "address_string": "пер. Чапаевский, д. 3, Москва"
            },
            "square": 256740.60,  # площадь помещения float
            "year": 2006,  # год ( видимо постройки)
            "number of floors": 57,  # этажи
            "number of entrances": 14,  # количество подъездов
            "number_of_apartments": 992,  # количество подъездов
            "coverage" : 6
        },




    ],
}



# test_points1 = {
#     [
#
#     ]
# }


@app.post("/api/get_postamats/", tags=["postmats"], description="getting postamate sampling data")
def test(filters: Filters):
    return test_points


@app.get('/api/get_pdf_data/', tags=["export_files"], description="exporting data in pdf format")
def get_data1():
    file_path = "storage/data.pdf"
    return FileResponse(media_type='application/octet-stream', filename="data.pdf", path=file_path)


@app.get('/api/get_xlsx_data/', tags=["export_files"], description="exporting data in xlsx format")
def get_data2():
    file_path = "storage/data.xlsx"
    return FileResponse(media_type='application/octet-stream', filename="data.xlsx", path=file_path)


@app.post('/test/', tags=["test"], description="test")
def get_test(filters: Filters):
    result = make_result(filters.dict())
    print(result)
    return result



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3333)

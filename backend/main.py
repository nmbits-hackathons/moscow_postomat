import json
from fastapi import FastAPI, UploadFile
import uvicorn

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


@app.post("/test/", tags=["тестовая ручка"])
def test():
    return 'ok'


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=3333)

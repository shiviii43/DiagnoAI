from fastapi import FastAPI

from app.schemas import DiabetesInput, HeartInput, LiverInput

from app.predictor import (
    predict_diabetes,
    predict_heart,
    predict_liver
)

app = FastAPI()

@app.post("/predict/diabetes")
def diabetes_prediction(data:DiabetesInput):
    return predict_diabetes(data)

@app.post("/predict/heart")
def heart_prediction(data:HeartInput):
    return predict_heart(data)

@app.post("/predict/liver")
def liver_prediction(data:LiverInput):
    return predict_liver(data)
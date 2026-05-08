from fastapi import FastAPI

from app.schemas import DiabetesInput, HeartInput, LiverInput

from app.predictor import (
    predict_diabetes,
    predict_heart,
    predict_liver
)

app = FastAPI()

@app.get("/")
def home():
    return{
        "message":"The Disease prediction API running"
    }

@app.post("/predict/diabetes")
def diabetes_prediction(data:DiabetesInput):
    prediction = predict_diabetes(data)
    result = "Positive" if prediction == 1 else "Negative"
    return {
        "disease":"Diabetes",
        "prediction":result
    } 

@app.post("/predict/heart")
def heart_prediction(data:HeartInput):
    prediction = predict_heart(data)
    result = "Positive" if prediction == 1 else "Negative"
    return{
        "disease":"Heart",
        "prediction":result
    }

@app.post("predict/liver")
def liver_prediction(data:LiverInput):
    prediction = predict_liver(data)
    result = "Positive" if prediction == 1 else "Negative"
    return{
        "diasease":"Liver",
        "prediction":result
    }
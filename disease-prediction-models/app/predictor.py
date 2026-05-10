import joblib
import numpy as np

diabetes_model = joblib.load("models/diabetes_model.pkl")
heart_model = joblib.load("models/heart_model.pkl")
liver_model = joblib.load("models/liver_model.pkl")

def predict_diabetes(data):

    input_data = np.array([[

        data.gender,
        data.age,
        data.hypertension,
        data.heart_disease,
        data.smoking_history,
        data.bmi,
        data.hbA1c_level,
        data.blood_glucose_level

    ]])

    prediction = diabetes_model.predict(input_data)
    probabilities = diabetes_model.predict_proba(input_data)
    confidence = np.max(probabilities) * 100
    return{
        "disease" : "Diabetes",
        "prediction" : int(prediction[0]),
        "confidence" : round(float(confidence),2)
    }

def predict_heart(data):

    input_data = np.array([[

        data.age,
        data.gender,
        data.cp,
        data.restbps,
        data.chol,
        data.fbs,
        data.restecg,
        data.thalach,
        data.exang,
        data.oldpeak,
        data.slope,
        data.ca,
        data.thal

    ]])

    prediction = heart_model.predict(input_data)
    probabilities = heart_model.predict_proba(input_data)
    confidence = np.max(probabilities) * 100
    return{
        "disease" : "Heart Disease",
        "prediction" : int(prediction[0]),
        "confidence" : round(float(confidence),2)
    }

def predict_liver(data):

    input_data = np.array([[

        data.age,
        data.gender,
        data.total_bilirubin,
        data.direct_bilirubin,
        data.alkaline_phosphotase,
        data.alamine_aminotransferase,
        data.aspartate_aminotransferase,
        data.total_proteins,
        data.albumin,
        data.albumin_and_globulin_ratio

    ]])

    prediction = liver_model.predict(input_data)
    probabilities = liver_model.predict_proba(input_data)
    confidence = np.max(probabilities) * 100
    return{
        "disease" : "Liver Disease",
        "prediction" : int(prediction[0]),
        "confidence" : round(float(confidence),2)
    }
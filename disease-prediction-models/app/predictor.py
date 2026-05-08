import joblib
import numpy as np

diabetes_model = joblib.load("models/diabetes_model.pkl")
heart_model = joblib.load("models/heart_model.pkl")
liver_model = joblib.load("models/liver_model.pkl")

gender_encoder = joblib.load("models/gender_encoder.pkl")
location_encoder = joblib.load("models/location_encoder.pkl")
smoking_encoder = joblib.load("models/smoking_encoder.pkl")

liver_gender_encoder = joblib.load("models/liver_gender_encoder.pkl")

def predict_diabetes(data):

    encoded_gender = gender_encoder.transform([data.gender])[0]
    encoded_location = location_encoder.transform([data.location])[0]
    encoded_smoking = smoking_encoder.transform([data.smoking_history])[0]

    input_data = np.array([[

        data.year,
        encoded_gender,
        data.age,
        encoded_location,
        data.race_africanamerican,
        data.race_asian,
        data.race_caucasian,
        data.race_hispanic,
        data.race_other,
        data.hypertension,
        data.heart_disease,
        encoded_smoking,
        data.bmi,
        data.hbA1c_level,
        data.blood_glucose_level

    ]])

    prediction = diabetes_model.predict(input_data)

    return int(prediction[0])

def predict_heart(data):

    input_data = np.array([[

        data.age,
        data.sex,
        data.cp,
        data.trestbps,
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

    return int(prediction[0])

def predict_liver(data):

    encoded_gender = liver_gender_encoder.transform([data.gender])[0]

    input_data = np.array([[

        data.age,
        encoded_gender,
        data.total_bilirubin,
        data.direct_bilirubin,
        data.alkaline_phosphotase,
        data.alamine_aminotransferase,
        data.aspartate_aminotransferase,
        data.total_protiens,
        data.albumin,
        data.albumin_and_globulin_ratio

    ]])

    prediction = liver_model.predict(input_data)

    return int(prediction[0])
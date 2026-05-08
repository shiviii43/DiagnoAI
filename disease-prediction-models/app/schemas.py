from pydantic import BaseModel

class DiabetesInput(BaseModel):
    year:int
    gender:str
    age:float
    location:str
    race_africanamerican: int
    race_asian: int
    race_caucasian: int
    race_hispanic: int
    race_other: int
    hypertension: int
    heart_disease: int
    smoking_history: str
    bmi: float
    hbA1c_level: float
    blood_glucose_level: int

class LiverInput(BaseModel):
    age: int
    gender: str
    total_bilirubin: float
    direct_bilirubin: float
    alkaline_phosphotase: float
    alamine_aminotransferase: float
    aspartate_aminotransferase: float
    total_protiens: float
    albumin: float
    albumin_and_globulin_ratio: float

class HeartInput(BaseModel):
    age: int
    sex: int
    cp: int
    trestbps: float
    chol: float
    fbs: int
    restecg: int
    thalach: float
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int
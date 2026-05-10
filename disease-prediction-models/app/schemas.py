from pydantic import BaseModel

class DiabetesInput(BaseModel):
    gender:int
    age:float
    hypertension: int
    heart_disease: int
    smoking_history: int
    bmi: float
    hbA1c_level: float
    blood_glucose_level: int

class LiverInput(BaseModel):
    age: int
    gender: int
    total_bilirubin: float
    direct_bilirubin: float
    alkaline_phosphotase: int
    alamine_aminotransferase: int
    aspartate_aminotransferase: int
    total_proteins: float
    albumin: float
    albumin_and_globulin_ratio: float

class HeartInput(BaseModel):
    age: int
    gender: int
    cp: int
    restbps: int
    chol: int
    fbs: int
    restecg: int
    thalach: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int
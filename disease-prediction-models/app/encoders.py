import pandas as pd
from sklearn.preprocessing import LabelEncoder
import joblib

diabetes_df = pd.read_csv("datasets/diabetes.csv")

gender_encoder = LabelEncoder()
gender_encoder.fit(diabetes_df["gender"])
joblib.dump(gender_encoder,"models/gender_encoder.pkl")

location_encoder = LabelEncoder()
location_encoder.fit(diabetes_df["location"])
joblib.dump(location_encoder,"models/location_encoder.pkl")

smoking_encoder = LabelEncoder()
smoking_encoder.fit(diabetes_df["smoking_history"])
joblib.dump(smoking_encoder,"models/smoking_encoder.pkl")

liver_df = pd.read_csv("datasets/liver.csv")
liver_gender_encoder = LabelEncoder()
liver_gender_encoder.fit(liver_df["Gender"])
joblib.dump(liver_gender_encoder,"models/liver_gender_encoder.pkl")
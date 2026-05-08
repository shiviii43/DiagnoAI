DiagnoAI

DiagnoAI is a full-stack AI-powered disease prediction system that uses Machine Learning models to predict the likelihood of multiple diseases based on user health parameters.

The project currently supports prediction for:

Diabetes
Heart Disease
Liver Disease

The backend is built using Spring Boot REST APIs, while Machine Learning inference is handled using Python-based ML models.

Features
Multi-disease prediction system
Spring Boot REST API backend
Machine Learning based predictions
Real-time API responses
Modular backend architecture
Integrated preprocessing and categorical encoding
Scalable full-stack architecture
Tech Stack
Backend
Java
Spring Boot
REST APIs
Maven
Machine Learning
Python
Scikit-learn
XGBoost
Pandas
NumPy
Joblib
Frontend
React.js
Axios
Project Structure
DiagnoAI/
│
├── backend/
│   ├── Spring Boot Application
│   └── REST API Controllers
│
├── ml-models/
│   ├── app/
│   │   ├── main.py
│   │   ├── predictor.py
│   │   └── schemas.py
│   │
│   ├── models/
│   │   ├── diabetes_model.pkl
│   │   ├── heart_model.pkl
│   │   ├── liver_model.pkl
│   │   ├── gender_encoder.pkl
│   │   ├── location_encoder.pkl
│   │   ├── smoking_encoder.pkl
│   │   └── liver_gender_encoder.pkl
│   │
│   └── training/
│
├── frontend/
│
├── datasets/
│
├── requirements.txt
└── README.md
System Architecture
Frontend (React)
        ↓
Spring Boot REST API
        ↓
FastAPI ML Service
        ↓
Machine Learning Models
        ↓
Prediction Response
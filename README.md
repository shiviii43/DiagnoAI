# DiagnoAI

DiagnoAI is a full-stack AI-powered disease prediction system that uses Machine Learning models to predict the likelihood of multiple diseases based on user health parameters.

The project currently supports prediction for:

- Diabetes
- Heart Disease
- Liver Disease

The backend is built using **Spring Boot REST APIs**, while Machine Learning inference is handled using **Python-based ML models**.

---

# Features

- Multi-disease prediction system
- Spring Boot REST API backend
- Machine Learning based predictions
- Real-time API responses
- Modular backend architecture
- Integrated preprocessing and categorical encoding
- Scalable full-stack architecture

---

# Tech Stack

## Backend
- Java
- Spring Boot
- REST APIs
- Maven

## Machine Learning
- Python
- Scikit-learn
- XGBoost
- Pandas
- NumPy
- Joblib
- FastAPI

## Frontend
- React.js
- Axios

---

# Project Structure

```text
DiagnoAI/
│
├── disease-prediction-backend/
│   ├── Spring Boot Application
│   ├── REST Controllers
│   └── API Services
│
├── disease-prediction-frontend/
│   ├── React Frontend
│   ├── Components
│   └── Axios API Integration
│
├── disease-prediction-models/
│   ├── app/
│   │   ├── main.py
│   │   ├── predictor.py
│   │   └── schemas.py
│   │
│   ├── models/
│   │   ├── diabetes_model.pkl
│   │   ├── heart_model.pkl
│   │   └── liver_model.pkl
│   │
│   ├── training/
│   └── datasets/
│
└── README.md
```

---

# System Architecture

```text
Frontend (ReactJS)
        ↓
Spring Boot REST API
        ↓
FastAPI ML Service
        ↓
Machine Learning Models
        ↓
Prediction Response
        ↓
FastAPI ML Service 
        ↓
Spring Boot REST API
        ↓
Frontend (ReactJS)
```

---

# API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/predict/diabetes` | Diabetes prediction |
| POST | `/predict/heart` | Heart disease prediction |
| POST | `/predict/liver` | Liver disease prediction |

---

# Running the ML Service

## 1. Activate Virtual Environment

```powershell
.\venc\Scripts\Activate.ps1
```

## 2. Run FastAPI Server

```powershell
python -m uvicorn app.main:app --reload
```

## 3. Access Swagger UI

```text
http://127.0.0.1:8000/docs
```

---

# Machine Learning Workflow

```text
Input Data
   ↓
Preprocessing & Encoding
   ↓
ML Model Prediction
   ↓
REST API Response
```

---

# Author

Shivansh Harbola

---

# License

This project is created for educational and academic purposes.
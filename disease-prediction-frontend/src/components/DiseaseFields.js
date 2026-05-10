
//The number of diseases that will be available for our dynamic form
export const DiseaseFields = {
    diabetes: {
    fields: [
        {
            name: "gender",
            label: "Gender",
            type: "select",
            options: [
                { label: "Male", value: 1 },
                { label: "Female", value: 0 }
            ]
        },
        {
            name: "age",
            label: "Age",
            type: "number"
        },
        {
            name: "hypertension",
            label: "Hypertension",
            type: "select",
            options: [
                { label: "Yes", value: 1 },
                { label: "No", value: 0 }
            ]
        },
        {
            name: "heart_disease",
            label: "Heart Disease",
            type: "select",
            options: [
                { label: "Yes", value: 1 },
                { label: "No", value: 0 }
            ]
        },
        {
            name: "smoking_history",
            label: "Smoking History",
            type: "select",
            options: [
                { label: "Never", value: 0 },
                { label: "Former", value: 1 },
                { label: "Current", value: 2 },
                { label: "Not Current", value: 3 }
            ]
        },
        {
            name: "bmi",
            label: "Body Mass Index [BMI]",
            type: "number",
            step: "0.1"
        },
        {
            name: "hbA1c_level",
            label: "HbA1c (%)",
            type: "number",
            step: "0.1"
        },
        {
            name: "blood_glucose_level",
            label: "Blood Glucose Level (mg/dL)",
            type: "number"
        }
    ],
    transform: (data) => ({
        ...data,

        gender: Number(data.gender),
        age: Number(data.age),
        hypertension: Number(data.hypertension),
        heart_disease: Number(data.heart_disease),
        smoking_history: Number(data.smoking_history),
        bmi: Number(data.bmi),
        hbA1c_level: Number(data.hbA1c_level),
        blood_glucose_level: Number(data.blood_glucose_level)
    })
    },
    
    heart: {
    fields: [
        {
            name: "age",
            label: "Age",
            type: "number"
        },
        {
            name: "sex",
            label: "Gender",
            type: "select",
            options: [
                { label: "Male", value: 1 },
                { label: "Female", value: 0 }
            ]
        },
        {
            name: "cp",
            label: "Chest Pain Type",
            type: "select",
            options: [
                { label: "Typical Angina", value: 0 },
                { label: "Atypical Angina", value: 1 },
                { label: "Non-anginal Pain", value: 2 },
                { label: "Asymptomatic", value: 3 }
            ]
        },
        {
            name: "trestbps",
            label: "Resting Blood Pressure",
            type: "number"
        },
        {
            name: "chol",
            label: "Cholesterol",
            type: "number"
        },
        {
            name: "fbs",
            label: "Fasting Blood Sugar > 120 mg/dL",
            type: "select",
            options: [
                { label: "Yes", value: 1 },
                { label: "No", value: 0 }
            ]
        },
        {
            name: "restecg",
            label: "Resting ECG Result",
            type: "select",
            options: [
                { label: "Normal", value: 0 },
                { label: "Left Ventricular Hypertrophy", value: 2 }
            ]
        },
        {
            name: "thalach",
            label: "Maximum Heart Rate Achieved",
            type: "number"
        },
        {
            name: "exang",
            label: "Exercise Induced Angina",
            type: "select",
            options: [
                { label: "Yes", value: 1 },
                { label: "No", value: 0 }
            ]
        },
        {
            name: "oldpeak",
            label: "ST Depression (Oldpeak)",
            type: "number",
            step: "0.1"
        },
        {
            name: "slope",
            label: "Slope of Peak Exercise ST Segment",
            type: "select",
            options: [
                { label: "Upsloping", value: 0 },
                { label: "Flat", value: 1 },
                { label: "Downsloping", value: 2 }
            ]
        },
        {
            name: "ca",
            label: "Number of Major Vessels",
            type: "select",
            options: [
                { label: "0", value: 0 },
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 }
            ]
        },
        {
            name: "thal",
            label: "Thalassemia",
            type: "select",
            options: [
                { label: "Normal", value: 1 },
                { label: "Fixed Defect", value: 2 },
                { label: "Reversible Defect", value: 3 }
            ]
        }
    ],
    transform: (data) => ({
        ...data,

        age: Number(data.age),
        sex: Number(data.sex),
        cp: Number(data.cp),
        trestbps: Number(data.trestbps),
        chol: Number(data.chol),
        fbs: Number(data.fbs),
        restecg: Number(data.restecg),
        thalach: Number(data.thalach),
        exang: Number(data.exang),
        oldpeak: Number(data.oldpeak),
        slope: Number(data.slope),
        ca: Number(data.ca),
        thal: Number(data.thal)
    })
    },
    liver: {
    fields: [
        {
            name: "age",
            label: "Age",
            type: "number"
        },
        {
            name: "gender",
            label: "Gender",
            type: "select",
            options: [
                { label: "Male", value: 1 },
                { label: "Female", value: 0 }
            ]
        },
        {
            name: "total_bilirubin",
            label: "Total Bilirubin",
            type: "number",
            step: "0.1"
        },
        {
            name: "direct_bilirubin",
            label: "Direct Bilirubin",
            type: "number",
            step: "0.1"
        },
        {
            name: "alkaline_phosphotase",
            label: "Alkaline Phosphotase",
            type: "number"
        },
        {
            name: "alamine_aminotransferase",
            label: "Alamine Aminotransferase",
            type: "number"
        },
        {
            name: "aspartate_aminotransferase",
            label: "Aspartate Aminotransferase",
            type: "number"
        },
        {
            name: "total_proteins",
            label: "Total Proteins",
            type: "number",
            step: "0.1"
        },
        {
            name: "albumin",
            label: "Albumin",
            type: "number",
            step: "0.1"
        },
        {
            name: "albumin_and_globulin_ratio",
            label: "Albumin and Globulin Ratio",
            type: "number",
            step: "0.1"
        }
    ],
    transform: (data) => ({
        ...data,

        age: Number(data.age),
        gender: Number(data.gender),
        total_bilirubin: Number(data.total_bilirubin),
        direct_bilirubin: Number(data.direct_bilirubin),
        alkaline_phosphotase: Number(data.alkaline_phosphotase),
        alamine_aminotransferase: Number(data.alamine_aminotransferase),
        aspartate_aminotransferase: Number(data.aspartate_aminotransferase),
        total_proteins: Number(data.total_proteins),
        albumin: Number(data.albumin),
        albumin_and_globulin_ratio: Number(data.albumin_and_globulin_ratio)
    })
}
}
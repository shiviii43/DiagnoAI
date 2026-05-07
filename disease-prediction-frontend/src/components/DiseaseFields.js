
//The number of diseases that will be available for our dynamic form
export const DiseaseFields = {
    diabetes :{
        fields : [
            { name: "gender", label: "Gender", type: "select", options: ["Male", "Female"] },
            { name: "age", label: "Age", type: "number" },
            { name: "hypertension", label: "Hypertension", type: "select", options: ["Yes", "No"] },
            { name: "heart_disease", label: "Heart Disease", type: "select", options: ["Yes", "No"] },
            { name: "smoking_history", label: "Smoking History", type: "select", options: ["never", "former", "current", "not current"] },
            { name: "bmi", label: "BMI", type: "number" },
            { name: "hbA1c_level", label: "HbA1c (%)", type: "number" },
            { name: "blood_glucose_level", label: "Blood Glucose Level (mg/dL)", type: "number" }
        ],
        transform : (data)=> ({
            ...data,
            age: Number(data.age),
            bmi: Number(data.bmi),
            hbA1c_level: Number(data.hbA1c_level),
            blood_glucose_level: Number(data.blood_glucose_level),
            hypertension: data.hypertension === "Yes" ? 1:0,
            heart_disease: data.heart_disease === "Yes" ? 1:0,
            gender : data.gender === "Male" ? 1 : 0
        })
    },
    heart : {
        fields:[
            { name: "age", label: "Age", type: "number" },
            { name: "sex", label: "Sex", type: "select", options: ["Male", "Female"] },
            { name: "cp", label: "Chest Pain Type", type: "select", options: [0,1,2,3] },
            { name: "trestbps", label: "Resting Blood Pressure", type: "number" },
            { name: "chol", label: "Cholesterol", type: "number" },
            { name: "fbs", label: "Fasting Blood Sugar > 120", type: "select", options: ["Yes", "No"] },
            { name: "thalach", label: "Max Heart Rate", type: "number" },
            { name: "exang", label: "Exercise Induced Angina", type: "select", options: ["Yes", "No"] }
        ],
        transform: (data)=>({
            ...data,
            age: Number(data.age),
            gender: data.gender === "Male" ? 1 : 0,
            trestbps: Number(data.trestbps),
            chol: Number(data.chol),
            thalach:Number(data.thalach),
            fbs:data.fbs === "Yes" ? 1 : 0,
            exang:data.exang === "Yes" ? 1 : 0
        })
    }
}
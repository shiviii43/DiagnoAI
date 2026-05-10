package com.shivansh.DiagnoAI.dto;

import lombok.Data;

@Data
public class DiabetesDTO {
    private int gender;
    private double age;
    private int hypertension;
    private int heart_disease;
    private int smoking_history;
    private double bmi;
    private double hbA1c_level;
    private int blood_glucose_level;
}

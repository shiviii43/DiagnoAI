package com.shivansh.DiagnoAI.dto;

import lombok.Data;

@Data
public class DiabetesDTO {
    private int gender;
    private int age;
    private int hypertension;
    private int heartDisease;
    private int smokingHistory;
    private double bmi;
    private int hbA1c;
    private int glucoseLevel;
}

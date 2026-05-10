package com.shivansh.DiagnoAI.dto;

import lombok.Data;

@Data
public class LiverDTO {
    private int age;
    private int gender;
    private double total_bilirubin;
    private double direct_bilirubin;
    private int alkaline_phosphotase;
    private int alamine_aminotransferase;
    private int aspartate_aminotransferase;
    private double total_proteins;
    private double albumin;
    private double albumin_and_globulin_ratio;
}

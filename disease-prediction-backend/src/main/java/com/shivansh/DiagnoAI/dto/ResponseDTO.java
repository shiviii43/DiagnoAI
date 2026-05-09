package com.shivansh.DiagnoAI.dto;

import lombok.Data;

@Data
public class ResponseDTO {
    private String diseaseName;
    private boolean prediction;
    private double confidence;
}

package com.shivansh.DiagnoAI.dto;

import lombok.Data;

@Data
public class ResponseDTO {
    private String disease;
    private int prediction;
    private double confidence;
}

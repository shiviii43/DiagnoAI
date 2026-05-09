package com.shivansh.DiagnoAI.dto;

import lombok.Data;

@Data
public class LiverDTO {
    private int age;
    private int gender;
    private int totalBilirubin;
    private int directBilirubin;
    private int alkalinePhosphotase;
    private int alamineAminotransferase;
    private int aspartateAminotransferase;
    private int totalProteins;
    private int albumin;
    private int albuminGlobulinRatio;
}

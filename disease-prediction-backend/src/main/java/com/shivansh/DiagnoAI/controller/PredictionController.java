package com.shivansh.DiagnoAI.controller;

import com.shivansh.DiagnoAI.dto.DiabetesDTO;
import com.shivansh.DiagnoAI.dto.HeartDTO;
import com.shivansh.DiagnoAI.dto.LiverDTO;
import com.shivansh.DiagnoAI.dto.ResponseDTO;
import com.shivansh.DiagnoAI.service.PredictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PredictionController {

    @Autowired
    private PredictionService serviceObj;

    @PostMapping("/diabetes/predict")
    public ResponseDTO getDiabetes(@RequestBody DiabetesDTO diabetesData){
        return serviceObj.predictDiabetes(diabetesData);
    }
    @PostMapping("/heart/predict")
    public ResponseDTO getHeart(@RequestBody HeartDTO heartData){
        return serviceObj.predictHeart(heartData);
    }
    @PostMapping("/liver/predict")
    public ResponseDTO getLiver(@RequestBody LiverDTO liverData){
        return serviceObj.predictLiver(liverData);
    }
}

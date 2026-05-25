package com.shivansh.DiagnoAI.service;

import com.shivansh.DiagnoAI.dto.DiabetesDTO;
import com.shivansh.DiagnoAI.dto.HeartDTO;
import com.shivansh.DiagnoAI.dto.LiverDTO;
import com.shivansh.DiagnoAI.dto.ResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class PredictionService {

    @Autowired
    private RestTemplate restTemplate;

    public ResponseDTO predictDiabetes(DiabetesDTO diabetesData){
        String url = "https://diagnoai-3kcj.onrender.com/predict/diabetes";
        ResponseDTO response = restTemplate.postForObject(
                url,
                diabetesData,
                ResponseDTO.class
        );
        return response;
    }
    public ResponseDTO predictHeart(HeartDTO heartData){
        String url = "https://diagnoai-3kcj.onrender.com/predict/heart";
        ResponseDTO response = restTemplate.postForObject(
                url,
                heartData,
                ResponseDTO.class
        );
        return response;
    }
    public ResponseDTO predictLiver(LiverDTO liverData){
        String url = "https://diagnoai-3kcj.onrender.com/predict/liver";
        ResponseDTO response = restTemplate.postForObject(
                url,
                liverData,
                ResponseDTO.class
        );
        return response;
    }
}

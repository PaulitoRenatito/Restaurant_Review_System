package com.example.restaurant_review_system.valuation_history;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("valuation_history")
public class ValuationHistoryController {

    @Autowired
    private ValuationHistoryRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ValuationHistoryResponseDTO> getAll() {
        List<ValuationHistoryResponseDTO> valuationHistoryList = repository.findAll().stream().map(ValuationHistoryResponseDTO::new).toList();
        return valuationHistoryList;
    }

}

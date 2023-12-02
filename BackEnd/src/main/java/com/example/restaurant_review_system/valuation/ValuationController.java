package com.example.restaurant_review_system.valuation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("valuation")
public class ValuationController {

    @Autowired
    private ValuationRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ValuationResponseDTO> getAll() {
        List<ValuationResponseDTO> valuationList = repository.findAll().stream().map(ValuationResponseDTO::new).toList();
        return valuationList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("getByRestaurantID/{restaurant_id}")
    public List<ValuationResponseDTO> getByRestaurantID(@PathVariable Long restaurant_id) {
        List<ValuationResponseDTO> valuationList = repository.getByRestaurantID(restaurant_id).stream().map(ValuationResponseDTO::new).toList();
        return valuationList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("getByUserID/{user_id}")
    public ResponseEntity<List<ValuationResponseDTO>> getByUserID(@PathVariable Long user_id) {
        List<ValuationResponseDTO> valuationList = repository.getByUserID(user_id).stream().map(ValuationResponseDTO::new).toList();
        return ResponseEntity.ok(valuationList);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveValuation(@RequestBody ValuationRequestDTO data) {
        Valuation valuationData = new Valuation(data);
        repository.save(valuationData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("{user_id}/{restaurant_id}")
    public ResponseEntity<Void> deleteByID(@PathVariable Long user_id, @PathVariable Long restaurant_id) {
        Valuation valuation = repository.getByUserAndRestaurantID(user_id, restaurant_id);

        if (valuation != null) {
            repository.delete(valuation);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

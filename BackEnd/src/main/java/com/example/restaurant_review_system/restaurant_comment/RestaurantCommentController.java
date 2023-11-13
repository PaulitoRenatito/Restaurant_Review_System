package com.example.restaurant_review_system.restaurant_comment;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("restaurant_comment")
public class RestaurantCommentController {
    @Autowired
    private RestaurantCommentRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<RestaurantCommentResponseDTO> getAll() {
        List<RestaurantCommentResponseDTO> restaurantCommentList = repository.findAll().stream().map(RestaurantCommentResponseDTO::new).toList();
        return restaurantCommentList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveRestaurantComment(@RequestBody RestaurantCommentResponseDTO data) {
        RestaurantComment restaurantComment= new RestaurantComment (data);
        repository.save(restaurantComment);
        return;
    }

}

package com.example.restaurant_review_system.restaurant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("restaurant")
public class RestaurantController {

    @Autowired
    private RestaurantRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<RestaurantResponseDTO> getAll() {
        List<RestaurantResponseDTO> restaurantList = repository.findAll().stream().map(RestaurantResponseDTO::new).toList();
        return restaurantList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{user_id}")
    public List<RestaurantResponseDTO> getUserFavoriteRestaurants(@PathVariable Long user_id) {
        List<RestaurantResponseDTO> favoriteRestaurantsList =
                repository.getFavoritesRestaurantsByUser(user_id).stream().map(RestaurantResponseDTO::new).toList();
        return favoriteRestaurantsList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveRestaurant(@RequestBody RestaurantRequestDTO data) {
        Restaurant restaurantData = new Restaurant(data);
        repository.save(restaurantData);
        return;
    }

}

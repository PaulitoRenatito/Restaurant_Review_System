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
    @PostMapping
    public void saveRestaurant(@RequestBody RestaurantRequestDTO data) {
        Restaurant restaurantData = new Restaurant(data);
        repository.save(restaurantData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("getFavoritesByUser/{user_id}")
    public List<RestaurantResponseDTO> getUserFavoriteRestaurants(@PathVariable Long user_id) {
        List<RestaurantResponseDTO> favoriteRestaurantsList =
                repository.getFavoritesRestaurantsByUser(user_id).stream().map(RestaurantResponseDTO::new).toList();
        return favoriteRestaurantsList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("getBetweenPriceRange/{min_price}/{max_price}")
    public List<RestaurantResponseDTO> getRestaurantsBetweenPriceRange(
            @PathVariable Long min_price, @PathVariable Long max_price) {
        List<RestaurantResponseDTO> restaurantsBetweenPriceRange =
                repository.getAllRestaurantsBetweenPriceRange(min_price, max_price).stream().map(RestaurantResponseDTO::new).toList();
        return restaurantsBetweenPriceRange;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("getByRating/{rating}")
    public List<RestaurantResponseDTO> getRestaurantsByRating(@PathVariable Double rating) {
        List<RestaurantResponseDTO> restaurantsByRating =
                repository.getAllRestaurantsByRating(rating).stream().map(RestaurantResponseDTO::new).toList();
        return restaurantsByRating;
    }

}

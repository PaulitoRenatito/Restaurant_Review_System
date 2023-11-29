package com.example.restaurant_review_system.restaurant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("restaurant")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RestaurantController {

    @Autowired
    private RestaurantRepository repository;

    @GetMapping
    public ResponseEntity<List<RestaurantResponseDTO>> getAll() {
        List<RestaurantResponseDTO> restaurantList = repository.findAll().stream().map(RestaurantResponseDTO::new).toList();
        return ResponseEntity.ok(restaurantList);
    }

    @PostMapping
    public ResponseEntity<Void> saveRestaurant(@RequestBody RestaurantRequestDTO data) {
        Restaurant restaurantData = new Restaurant(data);
        repository.save(restaurantData);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/getFavoritesByUser/{user_id}")
    public ResponseEntity<List<RestaurantResponseDTO>> getFavoritesByUser(@PathVariable Long user_id) {
        List<RestaurantResponseDTO> favoriteRestaurantsList =
                repository.getFavoritesRestaurantsByUser(user_id).stream().map(RestaurantResponseDTO::new).toList();
        return ResponseEntity.ok(favoriteRestaurantsList);
    }

    @GetMapping("getBetweenPriceRange/{min_price}/{max_price}")
    public ResponseEntity<List<RestaurantResponseDTO>> getBetweenPriceRange(
            @PathVariable Long min_price, @PathVariable Long max_price) {
        List<RestaurantResponseDTO> restaurantsBetweenPriceRange =
                repository.getAllRestaurantsBetweenPriceRange(min_price, max_price).stream().map(RestaurantResponseDTO::new).toList();
        return ResponseEntity.ok(restaurantsBetweenPriceRange);
    }

    @GetMapping("getByRating/{rating}")
    public ResponseEntity<List<RestaurantResponseDTO>> getByRating(@PathVariable Double rating) {
        List<RestaurantResponseDTO> restaurantsByRating =
                repository.getAllRestaurantsByRating(rating).stream().map(RestaurantResponseDTO::new).toList();
        return ResponseEntity.ok(restaurantsByRating);
    }

    @GetMapping("getById/{id}")
    public ResponseEntity<RestaurantResponseDTO> getById(@PathVariable Long id) {
        RestaurantResponseDTO restaurantById = new RestaurantResponseDTO(repository.getRestaurantById(id));
        return ResponseEntity.ok(restaurantById);
    }

}

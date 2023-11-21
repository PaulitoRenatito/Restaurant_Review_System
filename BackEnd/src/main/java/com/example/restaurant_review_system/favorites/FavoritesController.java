package com.example.restaurant_review_system.favorites;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("favorites")
public class FavoritesController {

    @Autowired
    private FavoritesRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FavoritesResponseDTO> getAll() {
        List<FavoritesResponseDTO> favoritesList = repository.findAll().stream().map(FavoritesResponseDTO::new).toList();
        return favoritesList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("isFavorite")
    public ResponseEntity<Boolean> isFavorite(@RequestBody FavoritesRequestDTO data) {
        Optional<Favorites> existingFavorite = repository.findByUserIdAndRestaurantId(data.user_id(), data.restaurant_id());
        return ResponseEntity.ok(existingFavorite.isPresent());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void toggleFavorite(@RequestBody FavoritesRequestDTO data) {
        Long userId = data.user_id();
        Long restaurantId = data.restaurant_id();

        Optional<Favorites> existingFavorite = repository.findByUserIdAndRestaurantId(userId, restaurantId);

        if (existingFavorite.isPresent()) {
            repository.delete(existingFavorite.get());
        } else {
            Favorites favoritesData = new Favorites(data);
            repository.save(favoritesData);
        }
    }

}

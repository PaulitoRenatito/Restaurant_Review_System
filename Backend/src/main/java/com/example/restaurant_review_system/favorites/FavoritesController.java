package com.example.restaurant_review_system.favorites;

import com.example.restaurant_review_system.restaurant.RestaurantResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

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
    @PostMapping
    public void saveFavorites(@RequestBody FavoritesRequestDTO data) {
        Favorites favoritesData = new Favorites(data);
        repository.save(favoritesData);
        return;
    }

}

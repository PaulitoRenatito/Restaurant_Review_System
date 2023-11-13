package com.example.restaurant_review_system.favorites;

public record FavoritesResponseDTO(Long user_id, Long restaurant_id) {

    public FavoritesResponseDTO(Favorites favorites) {
        this(favorites.getId().getUser_id(), favorites.getId().getRestaurant_id());
    }

}

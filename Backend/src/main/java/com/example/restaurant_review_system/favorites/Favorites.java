package com.example.restaurant_review_system.favorites;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "favorites", schema = "public")
@Entity(name = "favorites")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Favorites {

    @EmbeddedId
    private FavoritesID id;

    public Favorites(FavoritesRequestDTO data) {
        this.id = new FavoritesID(data.user_id(), data.restaurant_id());
    }

}

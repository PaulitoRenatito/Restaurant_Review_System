package com.example.restaurant_review_system.favorites;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class FavoritesID implements Serializable {
    private Long user_id;
    private Long restaurant_id;
}

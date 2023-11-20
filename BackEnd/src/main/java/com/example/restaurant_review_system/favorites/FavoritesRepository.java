package com.example.restaurant_review_system.favorites;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FavoritesRepository extends JpaRepository<Favorites, FavoritesID> {

    String sql_query_getByUserIdAndRestaurantId =
            """
            SELECT f.*
            FROM public.favorites AS f
            WHERE f.user_id = :userId AND f.restaurant_id = :restaurantId
            """;
    @Query(value = sql_query_getByUserIdAndRestaurantId, nativeQuery = true)
    Optional<Favorites> findByUserIdAndRestaurantId(@Param("userId") Long userId, @Param("restaurantId") Long restaurantId);
}

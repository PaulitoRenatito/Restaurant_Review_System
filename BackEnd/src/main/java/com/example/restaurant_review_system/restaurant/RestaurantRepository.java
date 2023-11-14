package com.example.restaurant_review_system.restaurant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    String sql_query_getFavoritesByUser =
            """
            SELECT r.*
            FROM public.favorites AS f
            JOIN public.restaurant AS r ON r.id = f.restaurant_id
            WHERE f.user_id = :id
            """;
    String sql_query_getRestaurantsByPriceRange =
            """
            SELECT r.*
            FROM public.restaurant AS r
            WHERE r.min_price>= :min_price AND r.max_price<= :max_price
            """;

    String sql_query_getRestaurantsByRating =
            """
            SELECT r.*
            FROM public.restaurant AS r
            LEFT JOIN valuation AS v
            ON r.id = v.restaurant_id
            GROUP BY r.id
            HAVING AVG(v.rating) > :rating
            """;

    @Query(value = sql_query_getFavoritesByUser, nativeQuery = true)
    List<Restaurant> getFavoritesRestaurantsByUser(@Param("id") Long id);

    @Query(value = sql_query_getRestaurantsByPriceRange, nativeQuery = true)
    List<Restaurant> getAllRestaurantsBetweenPriceRange(
            @Param("min_price") Long min_price, @Param("max_price") Long max_price);

    @Query(value = sql_query_getRestaurantsByRating, nativeQuery = true)
    List<Restaurant> getAllRestaurantsByRating(@Param("rating") Double rating);

}

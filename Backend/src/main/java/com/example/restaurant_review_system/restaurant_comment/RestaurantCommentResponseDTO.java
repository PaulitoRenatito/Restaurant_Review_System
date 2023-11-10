package com.example.restaurant_review_system.restaurant_comment;

import com.example.restaurant_review_system.valuation.Valuation;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.OffsetTime;

public record RestaurantCommentResponseDTO(Long user_id, Long restaurant_id,
                                           String comment, Date date, OffsetTime hour) {

    public RestaurantCommentResponseDTO( RestaurantComment restaurantComment) {
        this(restaurantComment.getId().getUser_id(), restaurantComment.getId().getRestaurant_id(),
                restaurantComment.getComment(),
                restaurantComment.getDate(), restaurantComment.getHour());
    }

}



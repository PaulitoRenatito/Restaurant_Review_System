package com.example.restaurant_review_system.restaurant_comment;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.OffsetTime;
public record RestaurantCommentRequestDTO (Long user_id, Long restaurant_id,
        String comment, Date date, OffsetTime hour){
}

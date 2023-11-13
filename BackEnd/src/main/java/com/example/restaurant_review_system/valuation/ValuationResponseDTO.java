package com.example.restaurant_review_system.valuation;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.OffsetTime;

public record ValuationResponseDTO(Long user_id, Long restaurant_id, BigDecimal rating,
                                   String comment, Date date, OffsetTime hour) {

    public ValuationResponseDTO(Valuation valuation) {
        this(valuation.getId().getUser_id(), valuation.getId().getRestaurant_id(),
                valuation.getRating(), valuation.getComment(),
                valuation.getDate(), valuation.getHour());
    }

}

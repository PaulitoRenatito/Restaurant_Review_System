package com.example.restaurant_review_system.valuation_history;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.OffsetTime;

public record ValuationHistoryResponseDTO(Long user_id, Long restaurant_id, BigDecimal rating,
                                          String comment, Date date, OffsetTime hour) {

    public ValuationHistoryResponseDTO(ValuationHistory valuationHistory) {
        this(valuationHistory.getId().getUser_id(), valuationHistory.getId().getRestaurant_id(),
                valuationHistory.getRating(), valuationHistory.getComment(),
                valuationHistory.getDate(), valuationHistory.getHour());
    }

}

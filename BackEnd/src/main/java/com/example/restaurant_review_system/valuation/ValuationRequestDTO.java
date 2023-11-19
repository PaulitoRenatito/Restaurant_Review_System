package com.example.restaurant_review_system.valuation;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.LocalTime;
import java.time.OffsetTime;

public record ValuationRequestDTO(Long user_id, Long restaurant_id, BigDecimal rating,
                                  String comment, Date date, LocalTime hour) {
}

package com.example.restaurant_review_system.restaurant;

import java.math.BigDecimal;

public record RestaurantRequestDTO(String name, String type_of_kitchen, String phone,
                                   String email, String opening_hours, String address,
                                   String image, BigDecimal min_price,
                                   BigDecimal max_price, String description) {
}

package com.example.restaurant_review_system.restaurant;

import java.math.BigDecimal;

public record RestaurantResponseDTO(Long id,String name, String type_of_kitchen, String phone,
                                    String email, String opening_hours, String address,BigDecimal average_rating
                                    ,String image,BigDecimal min_price, BigDecimal max_price,String description) {

    public RestaurantResponseDTO(Restaurant restaurant){
        this(restaurant.getId(), restaurant.getName(), restaurant.getType_of_kitchen() ,
                restaurant.getPhone(), restaurant.getEmail(), restaurant.getOpening_hours(),
                restaurant.getAddress(), restaurant.getAverage_rating(), restaurant.getImage(),
                restaurant.getMin_price() , restaurant.getMax_price(), restaurant.getDescription());
    }
}

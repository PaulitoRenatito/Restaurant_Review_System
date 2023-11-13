package com.example.restaurant_review_system.restaurant;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Table(name = "restaurant", schema = "public")
@Entity(name = "restaurant")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type_of_kitchen;
    private String phone;
    private String email;
    private String opening_hours;
    private String address;
    private BigDecimal average_rating;
    private String image;
    private BigDecimal min_price;
    private BigDecimal max_price;
    private String description;

    public Restaurant(RestaurantRequestDTO data) {
        this.name = data.name();
        this.type_of_kitchen = data.type_of_kitchen();
        this.phone = data.phone();
        this.email = data.email();
        this.opening_hours = data.opening_hours();
        this.address = data.address();
        this.image = data.image();
        this.min_price = data.min_price();
        this.max_price = data.max_price();
        this.description = data.description();
    }

}

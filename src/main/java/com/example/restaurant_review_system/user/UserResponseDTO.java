package com.example.restaurant_review_system.user;

public record UserResponseDTO(Long id, String first_name, String last_name, String profile_picture, String email) {

    public UserResponseDTO(User user) {
        this(user.getId(), user.getFirst_name(), user.getLast_name(), user.getProfile_picture(), user.getEmail());
    }

}

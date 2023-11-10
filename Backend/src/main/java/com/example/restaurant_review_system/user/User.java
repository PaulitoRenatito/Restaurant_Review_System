package com.example.restaurant_review_system.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "user", schema = "public")
@Entity(name = "user")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String first_name;
    private String last_name;
    private String profile_picture;
    private String email;

    public User(UserRequestDTO data) {
        this.first_name = data.first_name();
        this.last_name = data.last_name();
        this.profile_picture = data.profile_picture();
        this.email = data.email();
    }

}

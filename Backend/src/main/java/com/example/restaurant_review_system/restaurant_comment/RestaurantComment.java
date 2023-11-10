package com.example.restaurant_review_system.restaurant_comment;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.sql.Date;
import java.time.OffsetTime;

@Table(name = "restaurant_comment", schema = "public")
@Entity(name = "restaurant_comment")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class RestaurantComment {

    @EmbeddedId
    private RestaurantCommentID id;
    private String comment;
    private Date date;
    private OffsetTime hour;

    public RestaurantComment( RestaurantCommentResponseDTO data) {
        this.id = new RestaurantCommentID(data.user_id(), data.restaurant_id());
        this.comment = data.comment();
        this.date = data.date();
        this.hour = data.hour();
    }
}

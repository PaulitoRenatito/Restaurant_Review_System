package com.example.restaurant_review_system.valuation;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.LocalTime;
import java.time.OffsetTime;

@Table(name = "valuation", schema = "public")
@Entity(name = "valuation")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Valuation {

    @EmbeddedId
    private ValuationID id;
    private BigDecimal rating;
    private String comment;
    private Date date;
    private LocalTime hour;

    public Valuation(ValuationRequestDTO data) {
        this.id = new ValuationID(data.user_id(), data.restaurant_id());
        this.rating = data.rating();
        this.comment = data.comment();
        this.date = data.date();
        this.hour = data.hour();
    }

}

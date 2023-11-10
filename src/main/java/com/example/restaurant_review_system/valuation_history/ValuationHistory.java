package com.example.restaurant_review_system.valuation_history;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.OffsetTime;

@Table(name = "valuation_history", schema = "public")
@Entity(name = "valuation_history")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ValuationHistory {

    @EmbeddedId
    private ValuationHistoryID id;
    private BigDecimal rating;
    private String comment;
    private Date date;
    private OffsetTime hour;

    public ValuationHistory(ValuationHistoryDTO data) {
        this.id = new ValuationHistoryID(data.user_id(), data.restaurant_id());
    }

}

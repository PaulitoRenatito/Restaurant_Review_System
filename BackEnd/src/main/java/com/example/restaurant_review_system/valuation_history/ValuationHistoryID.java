package com.example.restaurant_review_system.valuation_history;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ValuationHistoryID implements Serializable {
    private Long user_id;
    private Long restaurant_id;
}

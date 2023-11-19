package com.example.restaurant_review_system.valuation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ValuationRepository extends JpaRepository<Valuation, ValuationID> {

    String sql_query_getByRestaurantID =
            """
                SELECT v.*
                FROM public.valuation AS v
                WHERE v.restaurant_id = :restaurant_id
            """;

    @Query(value = sql_query_getByRestaurantID, nativeQuery = true)
    List<Valuation> getByRestaurantID(@Param("restaurant_id") Long restaurant_id);

}

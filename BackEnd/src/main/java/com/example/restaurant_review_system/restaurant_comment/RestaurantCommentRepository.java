package com.example.restaurant_review_system.restaurant_comment;
import com.example.restaurant_review_system.valuation.Valuation;
import com.example.restaurant_review_system.valuation.ValuationID;
import org.springframework.data.jpa.repository.JpaRepository;
public interface RestaurantCommentRepository extends JpaRepository<RestaurantComment, RestaurantCommentID>{
}

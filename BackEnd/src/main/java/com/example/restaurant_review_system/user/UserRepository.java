package com.example.restaurant_review_system.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    String sql_query_getUserByNameAndPassword =
            """
                SELECT u.*
                FROM public."user" AS u
                WHERE u.first_name = :first_name AND u."password" = :password
            """;

    @Query(value = sql_query_getUserByNameAndPassword, nativeQuery = true)
    User getUserByPassword(@Param("first_name") String first_name, @Param("password") String password);

}

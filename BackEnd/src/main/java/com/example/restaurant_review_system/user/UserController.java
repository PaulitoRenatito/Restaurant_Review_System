package com.example.restaurant_review_system.user;

import com.example.restaurant_review_system.login.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<UserResponseDTO> getAll() {
        List<UserResponseDTO> userList = repository.findAll().stream().map(UserResponseDTO::new).toList();
        return userList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("getByID/{id}")
    public UserResponseDTO getByID(@PathVariable Long id) {
        UserResponseDTO user = new UserResponseDTO(repository.getByID(id));
        return user;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("auth")
    public ResponseEntity<UserResponseDTO> authenticateUser(@RequestBody LoginRequest loginRequest) {
        User authUser = repository.getUserByNameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());

        System.out.println(authUser);

        if (authUser != null) {
            UserResponseDTO authUserResponse = new UserResponseDTO(authUser);
            return ResponseEntity.ok(authUserResponse);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveUser(@RequestBody UserRequestDTO data) {
        User userData = new User(data);
        repository.save(userData);
        return;
    }


}

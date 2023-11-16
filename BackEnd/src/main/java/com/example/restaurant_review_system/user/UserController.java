package com.example.restaurant_review_system.user;

import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("getUserByNameAndPassword/{first_name}/{password}")
    public UserResponseDTO getUserByPassword(@PathVariable String first_name, @PathVariable String password) {
        UserResponseDTO userByPasswordList = new UserResponseDTO(repository.getUserByPassword(first_name, password));
        return userByPasswordList;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveUser(@RequestBody UserRequestDTO data) {
        User userData = new User(data);
        repository.save(userData);
        return;
    }


}

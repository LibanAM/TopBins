package com.bnta.TopBinsGame.controllers;

import com.bnta.TopBinsGame.models.User;
import com.bnta.TopBinsGame.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping()
    public ResponseEntity<List<User>> getUser() {
        return new ResponseEntity(userRepository.findAll(), HttpStatus.OK);
    }

    // SHOW
    @GetMapping(value = "/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        var user = userRepository.findById(id);
        return new ResponseEntity(user, user.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }

    // POST
    @PostMapping(value = "/new")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return new ResponseEntity<>(userRepository.save(user), HttpStatus.CREATED);

    }

    // DELETE
    @DeleteMapping(value = "remove/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return new ResponseEntity<>("Deleted User ID: " + id, HttpStatus.NOT_FOUND);
    }


    // PUT
    @PutMapping(value = "update/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User newUser) {
        var foundUser = userRepository.findById(id);
        if (foundUser.isPresent()) {
            User foundUserGet = foundUser.get();
            foundUserGet.setName(newUser.getName());
            foundUserGet.setEmailAddress(newUser.getEmailAddress());
            foundUserGet.setPassword(newUser.getPassword());
            foundUserGet.setScore(newUser.getScore());
            foundUserGet.setAdmin(newUser.getAdmin());
            userRepository.save(foundUserGet);
            return new ResponseEntity(foundUserGet, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

package com.example.MailMigo.Controller;

import com.example.MailMigo.Model.Email;
import com.example.MailMigo.Model.User;
import com.example.MailMigo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/getUser/{email}")
    public Optional<User> findUser(@PathVariable String email) {
        return userService.getUserByEmail(email);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User u1) {
        Optional<User> user = userService.login(u1);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(401).build());
    }

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User user) {
        boolean isSignupSuccessful = userService.signup(user);
        if (isSignupSuccessful) {
            return ResponseEntity.status(201).build();
        } else {
            return ResponseEntity.status(409).build();
        }
    }

    @GetMapping("/email/{email}")
    public List<Email> getEmails(@PathVariable String email) {
        return userService.fetchEmails(email);
    }

    @PostMapping("/email")
    public void createEmail(@RequestBody Email email) {

        userService.createEmail(email);
    }
}


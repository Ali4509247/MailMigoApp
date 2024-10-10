package com.example.MailMigo.Service;

import com.example.MailMigo.Model.Email;
import com.example.MailMigo.Model.User;
import com.example.MailMigo.Repository.UserRepository;
import com.example.MailMigo.Repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailRepository emailRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> login(User u1) {
        Optional<User> user = userRepository.findByEmail(u1.getEmail());
        if (user.isPresent() && user.get().getPassword().equals(u1.getPassword())) {
            return user;
        }
        return Optional.empty();
    }

    public boolean signup(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return false;
        }
        userRepository.save(user);
        return true;
    }
    
    public List<Email> fetchEmails(String email) {
        Optional<User> u1 = userRepository.findByEmail(email);
        Long userId = u1.get().getId();
        System.out.println(userId);
        return emailRepository.findByRecipientId(userId);
    }

    public void createEmail(Email email) {
        emailRepository.save(email);
    }
}
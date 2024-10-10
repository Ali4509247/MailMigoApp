package com.example.MailMigo.Repository;

import com.example.MailMigo.Model.Email;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmailRepository extends JpaRepository<Email, Long> {
    List<Email> findByRecipientId(Long recipientId);
}
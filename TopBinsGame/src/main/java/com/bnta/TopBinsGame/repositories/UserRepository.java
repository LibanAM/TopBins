package com.bnta.TopBinsGame.repositories;

import com.bnta.TopBinsGame.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

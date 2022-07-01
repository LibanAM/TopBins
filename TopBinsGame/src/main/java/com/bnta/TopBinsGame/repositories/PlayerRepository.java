package com.bnta.TopBinsGame.repositories;

import com.bnta.TopBinsGame.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findByNameIsContainingIgnoreCase(String name);

}

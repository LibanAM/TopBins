package com.bnta.TopBinsGame.repositories;

import com.bnta.TopBinsGame.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {

}

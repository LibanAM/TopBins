package com.bnta.TopBinsGame.repositories;


import com.bnta.TopBinsGame.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
}

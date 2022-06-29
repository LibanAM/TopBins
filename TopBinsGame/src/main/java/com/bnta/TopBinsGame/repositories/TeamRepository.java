package com.bnta.TopBinsGame.repositories;


import com.bnta.TopBinsGame.models.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team, Long> {
    List<Team> findByNameIgnoreCase(String name);
}

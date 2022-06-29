package com.bnta.TopBinsGame.repositories;

import com.bnta.TopBinsGame.models.League;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeagueRepository extends JpaRepository<League, Long> {
    List<League> getLeaguesByName(String name);
}

package com.bnta.TopBinsGame.controllers;

import com.bnta.TopBinsGame.models.Team;
import com.bnta.TopBinsGame.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("teams")
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @GetMapping
    public ResponseEntity<List<Team>> getAllTeamsAndFilters(@RequestParam(required = false, name = "name") String name){
        if(name != null) {
            return new ResponseEntity<>(teamRepository.findByNameIgnoreCase(name), HttpStatus.OK);
        }
        return new ResponseEntity<>(teamRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Team>> getTeam(@PathVariable Long id){
        var team = teamRepository.findById(id);
        return new ResponseEntity<>(team, team.isEmpty() ? HttpStatus.NOT_FOUND : HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Team> createTeam(@RequestBody Team newTeam){
        teamRepository.save(newTeam);
        return new ResponseEntity<>(newTeam, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Team> updateTeam (@PathVariable Long id, @RequestBody Team teamUpdate){
        var team = teamRepository.findById(id);

        if (team.isPresent()){
            Team _team = team.get();
            _team.setDomesticTrophies(teamUpdate.getDomesticTrophies());
            _team.setIntTrophies(teamUpdate.getIntTrophies());
            _team.setChampionsLeagueWins(teamUpdate.getChampionsLeagueWins());
            _team.setChampionsLeagueLosses(teamUpdate.getChampionsLeagueLosses());
            _team.setChampionsLeagueDraws(teamUpdate.getChampionsLeagueDraws());
            _team.setTotalChampionsLeagueGoals(teamUpdate.getTotalChampionsLeagueGoals());
            _team.setLeague(teamUpdate.getLeague());
            _team.setPlayers(teamUpdate.getPlayers());

            teamRepository.save(_team);
            return new ResponseEntity<>(_team, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Team>> deleteTeam(@PathVariable Long id){
        teamRepository.deleteById(id);
        return new ResponseEntity<>(teamRepository.findById(id), HttpStatus.OK);
    }


}

package com.bnta.TopBinsGame.controllers;


import com.bnta.TopBinsGame.models.League;
import com.bnta.TopBinsGame.repositories.LeagueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("leagues")
public class LeagueController {

    @Autowired
    LeagueRepository leagueRepository;


    //GET

    @GetMapping
    public ResponseEntity<List<League>> getAllLeaguesByName(@RequestParam(required = false, name = "name") String name) {
        if (name != null) {
            return new ResponseEntity<>(leagueRepository.getLeaguesByName(name), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(leagueRepository.findAll(), HttpStatus.OK);
        }
    }

    //SHOW
    @GetMapping(value = "/{id}")
    public ResponseEntity<League> getLeaguesById (@PathVariable Long id) {
        return new ResponseEntity(leagueRepository.findById(id), HttpStatus.OK);
    }

    //POST
    @PostMapping(value = "/new")
    public ResponseEntity<League> createLeague(@RequestBody League league) {
        return new ResponseEntity<>(leagueRepository.save(league), HttpStatus.OK);
    }

    //PUT
    @PutMapping(value = "/update/{id}")
    public ResponseEntity<League> updateLeague(@PathVariable(value = "id") Long id, @RequestBody League newLeague) {
        var foundLeague = leagueRepository.findById(id);
        if (foundLeague.isPresent()) {
            League foundLeagueGet = foundLeague.get();
            foundLeagueGet.setName(newLeague.getName());
            foundLeagueGet.setChampionsLeagues(newLeague.getChampionsLeagues());
            foundLeagueGet.setConferenceLeague(newLeague.getConferenceLeague());
            foundLeagueGet.setEuropaLeague(newLeague.getEuropaLeague());
            foundLeagueGet.setTeams(newLeague.getTeams());
            leagueRepository.save(foundLeagueGet);
            return new ResponseEntity(foundLeagueGet, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping(value = "remove/{id}")
    public ResponseEntity<String> deleteLeague(@PathVariable Long id) {
        String leagueName = leagueRepository.findById(id).get().getName();
        leagueRepository.deleteById(id);
        return new ResponseEntity<>("Deleted League By ID:" + id + " " + leagueName, HttpStatus.NOT_FOUND);
    }

}

package com.bnta.TopBinsGame.controllers;

import com.bnta.TopBinsGame.models.Player;
import com.bnta.TopBinsGame.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("players")
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping
    public ResponseEntity<List<Player>> getPlayerByNameOrAllPlayers(@RequestParam(required = false, name = "name") String name) {
        if (name != null){
            return new ResponseEntity<>(playerRepository.findByNameIgnoreCase(name), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<List<Player>> getPlayerById(@PathVariable Long id) {
        return new ResponseEntity(playerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Player> createPlayer(@RequestBody Player player) {
        return new ResponseEntity<>(playerRepository.save(player), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Player> updatePlayer(@PathVariable Long id, @RequestBody Player newPlayer) {
        var foundPlayerByID = playerRepository.findById(id);
        if (foundPlayerByID.isPresent()){
            Player foundPlayer = foundPlayerByID.get();
            foundPlayer.setName(newPlayer.getName());
            foundPlayer.setNationality(newPlayer.getNationality());
            foundPlayer.setPosition(newPlayer.getPosition());
            foundPlayer.setLeagueGoals(newPlayer.getLeagueGoals());
            foundPlayer.setInternationalGoals(newPlayer.getInternationalGoals());
            foundPlayer.setleagueAppearances(newPlayer.getleagueAppearances());
            foundPlayer.setAssists(newPlayer.getAssists());
            foundPlayer.setYellowCards(newPlayer.getYellowCards());
            foundPlayer.setRedCards(newPlayer.getRedCards());
            foundPlayer.setTeam(newPlayer.getTeam());
            foundPlayer.setImgLink(newPlayer.getImgLink());
            return new ResponseEntity<>(playerRepository.save(foundPlayer), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> deletePlayer (@PathVariable Long id){
        playerRepository.deleteById(id);
        return new ResponseEntity<>("Deleted player ID: " + id, HttpStatus.NOT_FOUND);
    }

}

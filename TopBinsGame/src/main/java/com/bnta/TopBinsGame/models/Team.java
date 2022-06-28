package com.bnta.TopBinsGame.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private int domesticTrophies;
    @Column
    private int intTrophies;
    @Column
    private int leagueWins;
    @Column
    private int leagueLosses;
    @Column
    private int leagueDraws;
    @Column
    private int totalGoals;

    @ManyToOne
    @JoinColumn(name = "leagues_id")
    private League leagues;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

    private Team(){
    }

    public Team(String name, int domesticTrophies, int intTrophies, int leagueWins,
                int leagueLosses, int leagueDraws, int totalGoals, League leagues) {
        this.name = name;
        this.domesticTrophies = domesticTrophies;
        this.intTrophies = intTrophies;
        this.leagueWins = leagueWins;
        this.leagueLosses = leagueLosses;
        this.leagueDraws = leagueDraws;
        this.totalGoals = totalGoals;
        this.leagues = leagues;
        this.players = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDomesticTrophies() {
        return domesticTrophies;
    }

    public void setDomesticTrophies(int domesticTrophies) {
        this.domesticTrophies = domesticTrophies;
    }

    public int getIntTrophies() {
        return intTrophies;
    }

    public void setIntTrophies(int intTrophies) {
        this.intTrophies = intTrophies;
    }

    public int getLeagueWins() {
        return leagueWins;
    }

    public void setLeagueWins(int leagueWins) {
        this.leagueWins = leagueWins;
    }

    public int getLeagueLosses() {
        return leagueLosses;
    }

    public void setLeaguesLosses(int leagueLosses) {
        this.leagueLosses = leagueLosses;
    }

    public int getLeagueDraws() {
        return leagueDraws;
    }

    public void setLeagueDraws(int leagueDraws) {
        this.leagueDraws = leagueDraws;
    }

    public int getTotalGoals() {
        return totalGoals;
    }

    public void setTotalGoals(int totalGoals) {
        this.totalGoals = totalGoals;
    }

    public League getLeagues() {
        return leagues;
    }

    public void setLeagues(League leagues) {
        this.leagues = leagues;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    @Override
    public String toString() {
        return "Teams{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", domesticTrophies=" + domesticTrophies +
                ", intTrophies=" + intTrophies +
                ", leagueWins=" + leagueWins +
                ", leagueLosses=" + leagueLosses +
                ", leagueDraws=" + leagueDraws +
                ", totalGoals=" + totalGoals +
                ", leagues=" + leagues +
                ", players=" + players +
                '}';
    }
}

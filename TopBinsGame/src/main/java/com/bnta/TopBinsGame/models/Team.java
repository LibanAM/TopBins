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
    private int totalLeagueGoals;

    @ManyToOne
    @JoinColumn(name = "leagues_id")
    private League league;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

    public Team(){
    }

    public Team(String name, int domesticTrophies, int intTrophies, int leagueWins,
                int leagueLosses, int leagueDraws, int totalLeagueGoals, League league) {
        this.name = name;
        this.domesticTrophies = domesticTrophies;
        this.intTrophies = intTrophies;
        this.leagueWins = leagueWins;
        this.leagueLosses = leagueLosses;
        this.leagueDraws = leagueDraws;
        this.totalLeagueGoals = totalLeagueGoals;
        this.league = league;
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
        return totalLeagueGoals;
    }

    public void setTotalGoals(int totalGoals) {
        this.totalLeagueGoals = totalGoals;
    }

    public League getLeague() {
        return league;
    }

    public void setLeague(League league) {
        this.league = league;
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
                ", totalGoals=" + totalLeagueGoals +
                ", league=" + league +
                ", players=" + players +
                '}';
    }
}

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
    private int championsLeagueWins;

    @Column
    private int championsLeagueLosses;

    @Column
    private int championsLeagueDraws;

    @Column
    private int totalChampionsLeagueGoals;

    @ManyToOne
    @JoinColumn(name = "leagues_id")
    private League league;

    @OneToMany(mappedBy = "team")
    private List<Player> players;

    public Team(){
    }

    public Team(String name, int domesticTrophies, int intTrophies, int championsLeagueWins,
                int championsLeagueLosses, int championsLeagueDraws, int totalChampionsLeagueGoals, League league) {
        this.name = name;
        this.domesticTrophies = domesticTrophies;
        this.intTrophies = intTrophies;
        this.championsLeagueWins = championsLeagueWins;
        this.championsLeagueLosses = championsLeagueLosses;
        this.championsLeagueDraws = championsLeagueDraws;
        this.totalChampionsLeagueGoals = totalChampionsLeagueGoals;
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

    public int getChampionsLeagueWins() {
        return championsLeagueWins;
    }

    public void setChampionsLeagueWins(int championsLeagueWins) {
        this.championsLeagueWins = championsLeagueWins;
    }

    public int getChampionsLeagueLosses() {
        return championsLeagueLosses;
    }

    public void setChampionsLeagueLosses(int championsLeagueLosses) {
        this.championsLeagueLosses = championsLeagueLosses;
    }

    public int getChampionsLeagueDraws() {
        return championsLeagueDraws;
    }

    public void setChampionsLeagueDraws(int championsLeagueDraws) {
        this.championsLeagueDraws = championsLeagueDraws;
    }

    public int getTotalChampionsLeagueGoals() {
        return totalChampionsLeagueGoals;
    }

    public void setTotalChampionsLeagueGoals(int totalChampionsLeagueGoals) {
        this.totalChampionsLeagueGoals = totalChampionsLeagueGoals;
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
                ", leagueWins=" + championsLeagueWins +
                ", leagueLosses=" + championsLeagueLosses +
                ", leagueDraws=" + championsLeagueDraws +
                ", totalGoals=" + totalChampionsLeagueGoals +
                ", league=" + league +
                ", players=" + players +
                '}';
    }
}

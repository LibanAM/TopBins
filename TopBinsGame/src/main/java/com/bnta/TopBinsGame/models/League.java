package com.bnta.TopBinsGame.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "leagues")
public class League {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String country;

    @Column
    private int championsLeagues;

    @Column
    private int europaLeague;

    @Column
    private int conferenceLeague;

    @OneToMany(mappedBy = "league")
    private List<Team> teams;


    public League(String name, String country, int championsLeagues, int europaLeague, int conferenceLeague) {
        this.name = name;
        this.country = country;
        this.championsLeagues = championsLeagues;
        this.europaLeague = europaLeague;
        this.conferenceLeague = conferenceLeague;
        this.teams = new ArrayList<>();
    }

    public League() {
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

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getChampionsLeagues() {
        return championsLeagues;
    }

    public void setChampionsLeagues(int championsLeagues) {
        this.championsLeagues = championsLeagues;
    }

    public int getEuropaLeague() {
        return europaLeague;
    }

    public void setEuropaLeague(int europaLeague) {
        this.europaLeague = europaLeague;
    }

    public int getConferenceLeague() {
        return conferenceLeague;
    }

    public void setConferenceLeague(int conferenceLeague) {
        this.conferenceLeague = conferenceLeague;
    }

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }

    @Override
    public String toString() {
        return "Leagues{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", country='" + country + '\'' +
                ", championsLeagues=" + championsLeagues +
                ", europaLeague=" + europaLeague +
                ", conferenceLeague=" + conferenceLeague +
                ", teams=" + teams +
                '}';
    }
}

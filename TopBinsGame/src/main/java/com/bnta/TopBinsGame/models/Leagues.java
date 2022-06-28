package com.bnta.TopBinsGame.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "leagues")
public class Leagues {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String country;
    @Column
    private int UCLs;
    @Column
    private int europaLeague;
    @Column
    private int conferenceLeague;
    @OneToMany(mappedBy = "leagues")
    @JsonIgnoreProperties("leagues")
    private List<Teams> teams;


    public Leagues(String name, String country, int UCLs, int europaLeague, int conferenceLeague, List<Teams> teams) {
        this.name = name;
        this.country = country;
        this.UCLs = UCLs;
        this.europaLeague = europaLeague;
        this.conferenceLeague = conferenceLeague;
        this.teams = new ArrayList<>();
    }

    public Leagues() {
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

    public int getUCLs() {
        return UCLs;
    }

    public void setUCLs(int UCLs) {
        this.UCLs = UCLs;
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

    public List<Teams> getTeams() {
        return teams;
    }

    public void setTeams(List<Teams> teams) {
        this.teams = teams;
    }

    @Override
    public String toString() {
        return "Leagues{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", country='" + country + '\'' +
                ", UCLs=" + UCLs +
                ", europaLeague=" + europaLeague +
                ", conferenceLeague=" + conferenceLeague +
                ", teams=" + teams +
                '}';
    }
}

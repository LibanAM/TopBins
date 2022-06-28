package com.bnta.TopBinsGame.models;


import javax.persistence.*;

@Entity
@Table(name = "players")
public class Players {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Nationality nationality;

    @Column
    private Position position;

    @Column
    private int leagueGoals;

    @Column
    private int internationalGoals;

    @Column
    private int appearances;

    @Column
    private int assists;

    @Column
    private int yellowCards;

    @Column
    private int redCards;

    @ManyToOne
    @JoinColumn(name = "teams_id")
    private Teams team;

    @Column
    private String imgLink;

    public Players() {
    }

    public Players(String name, Nationality nationality, Position position, int leagueGoals,
                   int internationalGoals, int appearances, int assists, int yellowCards,
                   int redCards, Teams team, String imgLink) {
        this.name = name;
        this.nationality = nationality;
        this.position = position;
        this.leagueGoals = leagueGoals;
        this.internationalGoals = internationalGoals;
        this.appearances = appearances;
        this.assists = assists;
        this.yellowCards = yellowCards;
        this.redCards = redCards;
        this.team = team;
        this.imgLink = imgLink;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Nationality getNationality() {
        return nationality;
    }

    public void setNationality(Nationality nationality) {
        this.nationality = nationality;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public int getLeagueGoals() {
        return leagueGoals;
    }

    public void setLeagueGoals(int leagueGoals) {
        this.leagueGoals = leagueGoals;
    }

    public int getInternationalGoals() {
        return internationalGoals;
    }

    public void setInternationalGoals(int internationalGoals) {
        this.internationalGoals = internationalGoals;
    }

    public int getAppearances() {
        return appearances;
    }

    public void setAppearances(int appearances) {
        this.appearances = appearances;
    }

    public int getAssists() {
        return assists;
    }

    public void setAssists(int assists) {
        this.assists = assists;
    }

    public int getYellowCards() {
        return yellowCards;
    }

    public void setYellowCards(int yellowCards) {
        this.yellowCards = yellowCards;
    }

    public int getRedCards() {
        return redCards;
    }

    public void setRedCards(int redCards) {
        this.redCards = redCards;
    }

    public Teams getTeam() {
        return team;
    }

    public void setTeam(Teams team) {
        this.team = team;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    @Override
    public String toString() {
        return "Players{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", nationality=" + nationality +
                ", position=" + position +
                ", leagueGoals=" + leagueGoals +
                ", internationalGoals=" + internationalGoals +
                ", appearances=" + appearances +
                ", assists=" + assists +
                ", yellowCards=" + yellowCards +
                ", redCards=" + redCards +
                ", team=" + team +
                ", imgLink='" + imgLink + '\'' +
                '}';
    }
}

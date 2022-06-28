package com.bnta.TopBinsGame.components;

import com.bnta.TopBinsGame.models.*;
import com.bnta.TopBinsGame.repositories.LeagueRepository;
import com.bnta.TopBinsGame.repositories.PlayerRepository;
import com.bnta.TopBinsGame.repositories.TeamRepository;
import com.bnta.TopBinsGame.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TeamRepository teamRepository;

    @Autowired
    LeagueRepository leagueRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception{


        League premierLeague = new League("Premier League", "England", 14, 9, 0);
        League ligue1 = new League("UberEats Ligue 1", "France",1,0,0);
        League laLiga = new League("La Liga", "Spain",19,11,0);
        League serieA = new League("Serie A", "Italy",12,9,1);

        leagueRepository.saveAll(Arrays.asList(premierLeague, ligue1, laLiga, serieA));
        
        Team manCity = new Team("Manchester City", 29, 0, 1534, 1313, 887, 5974, premierLeague);
        Team liverpoolFC = new Team("Liverpool FC", 51, 14, 2016, 1181, 1051, 7115, premierLeague);
        Team manUnited = new Team("Manchester United", 58, 8, , , , ,);
        Team chelsea = new Team("Chelsea", 23, 9, , , , ,);

        Team barcelona = new Team("FC Barcelona", 75, 17, )

        teamRepository.saveAll(Arrays.asList(manCity, liverpoolFC, manUnited));

        //    Player(name, nationality, position, league goals, international goals, apps, assists, yellowCards, redCards, team, img)
        Player cristanoRonaldo = new Player("Cristiano Ronaldo", Nationality.PORTUGUESE, Position.FORWARD, 497, 117, 935, 230, 115, 11, manUnited, "https://www.planetsport.com/image-library/square/500/m/manchester-united-cristiano-ronaldo-16-october-2021.jpg");
        Player jadonSancho = new Player("Jadon Sancho", Nationality.ENGLISH, Position.FORWARD, 41, 3, 175,  48, 4, 0, manUnited,"https://manutdnews.com/wp-content/uploads/2021/11/manchester-united-v-atalanta-group-f-uefa-champions-league-1-1536x1024.jpg");
        Player deGea = new Player("David De Gea", Nationality.SPANISH, Position.GOALKEEPER, 0, 0, )
        playerRepository.saveAll(Arrays.asList(cristanoRonaldo, jadonSancho));

    User user1 = new User("Lily", "Lily101@gmail.com", "Chelsea1!", 0, "False";
    User user2 = new User("Luke", "Luke13@gmail.com", "Arsenal1!", 0, "True");
    User user3 = new User("Ellie","Ellie123@gmail.com", "Devil123!", 0, "False");
    User user4 = new User("Elias","Elias22@gmail.com", "Pool13!", 0, "False");
    User user5 = new User("Paul","Joel2@gmail.com", "Parisians1!", 0, "True");
    User user6 = new User("Fernando","Fer12@gmail.com","RealDeal15", 0, "True");
    User user7 = new User("Pedro","Pedro23@gmail.com","Porto4life", 0, "False");
    User user8 = new User("Guiseppe", "G123@gmail.com","Acmilan123!", 0, "True");


    userRepository.saveAll(Arrays.asList(user1, user2, user3, user4, user5, user6, user7, user8));
    }

}

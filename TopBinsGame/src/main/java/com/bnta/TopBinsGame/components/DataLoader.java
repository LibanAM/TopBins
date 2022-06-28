package com.bnta.TopBinsGame.components;

import com.bnta.TopBinsGame.models.*;
import com.bnta.TopBinsGame.repositories.LeagueRepository;
import com.bnta.TopBinsGame.repositories.PlayerRepository;
import com.bnta.TopBinsGame.repositories.TeamRepository;
import com.bnta.TopBinsGame.repositories.UserRepository;
import jdk.jfr.Frequency;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.tools.ForwardingFileObject;
import java.security.cert.PolicyNode;
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
        
        Team manCity = new Team("Manchester City", 28, 1, 58, 29, 19, 210, premierLeague);
        Team liverpoolFC = new Team("Liverpool FC", 51, 14, 139, 53, 48, 453, premierLeague);
        Team manUnited = new Team("Manchester United", 58, 8, 160, 64, 69, 533, premierLeague);
        Team chelsea = new Team("Chelsea", 23, 9, 99, 40, 52, 330, premierLeague);
        Team tottenham = new Team("Tottenham", 21, 3, 25, 20, 10, 108, premierLeague);

        Team psg = new Team("Paris Saint-Germain", 43, 2, 73, 37, 25, 265, ligue1);
        Team asMonaco = new Team("AS Monaco", 18, 0, 44, 46, 22, 175, ligue1);
        Team marseille = new Team("Olympique de Marseille", 26, 1, 44, 45, 19, 155, ligue1);
        Team rennes = new Team("Stade Rennais FC", 4, 0, 0, 1, 5, 3, ligue1);
        Team lyon = new Team("Olympique Lyonnais", 21, 0, 60, 41, 29, 205, ligue1);

        Team barcelona = new Team("FC Barcelona", 75, 17, 169, 52, 67, 600, laLiga);
        Team realMadrid = new Team("Real Madrid", 68, 20, 277, 108, 79, 1021 , laLiga);
        Team atleticoMadrid = new Team("Club Atlético de Madrid", 25, 8, 75, 39, 40, 221, laLiga);
        Team sevilla = new Team("Sevilla",7,7, 29,20,17, 104, laLiga);
        Team athleticBilbao = new Team("Athletic Bilbao", 36, 0, 10, 10, 8, 16, laLiga);

        Team juventus = new Team("Juventus", 59, 8, 152, 73, 70, 470, serieA);
        Team acMilan = new Team("AC Milan", 31, 15, 126, 64, 65, 422, serieA);
        Team interMilan = new Team("Internazionale Milano", 33, 7, 91, 50, 51, 271, serieA);
        Team napoli = new Team("S.S.C. Napoli", 10, 1, 22, 15, 15, 80, serieA);
        Team asRoma = new Team("AS Roma", 14, 1, 41, 43, 27, 148, serieA);

        teamRepository.saveAll(Arrays.asList(
                manCity, liverpoolFC, manUnited, chelsea, tottenham,
                psg, asMonaco, marseille, rennes, lyon,
                barcelona, realMadrid, atleticoMadrid, sevilla, athleticBilbao,
                juventus, acMilan, interMilan, napoli, asRoma));

        // Premier League Players
        //    Player(name, nationality, position, league goals, international goals, apps, assists, yellowCards, redCards, team, img)
        Player cristanoRonaldo = new Player("Cristiano Ronaldo", Nationality.PORTUGUESE, Position.FORWARD, 497, 117, 935, 230, 115, 11, manUnited, "https://www.planetsport.com/image-library/square/500/m/manchester-united-cristiano-ronaldo-16-october-2021.jpg");
        Player jadonSancho = new Player("Jadon Sancho", Nationality.ENGLISH, Position.FORWARD, 41, 3, 175,  48, 4, 0, manUnited,"https://manutdnews.com/wp-content/uploads/2021/11/manchester-united-v-atalanta-group-f-uefa-champions-league-1-1536x1024.jpg");
        Player deGea = new Player("David De Gea", Nationality.SPANISH, Position.GOALKEEPER, 0, 0, 571, 0, 8,0, manUnited, "https://e2.365dm.com/18/04/800x600/skysports-de-gea-david-de-gea_4277878.jpg?20180408202315");
        Player harryMaguire = new Player("Harry Maguire", Nationality.ENGLISH, Position.DEFENDER, 11, 7, 203, 8, 43, 2, manUnited, "https://c.ndtvimg.com/2022-01/pjlvb56o_harry-maguire_625x300_09_January_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605");
        Player fred = new Player("Fred", Nationality.BRAZILIAN, Position.MIDFIELDER, 23, 0, 111, 5, 28, 0, manUnited, "https://weallfollowunited.com/wp-content/uploads/2020/10/Fred-celebrates.jpg");

        Player edouardMendy = new Player("Edouard Mendy", Nationality.SENEGALESE, Position.GOALKEEPER, 0, 0, 128, 0, 5, 0, chelsea, "https://i2-prod.manchestereveningnews.co.uk/incoming/article22530085.ece/ALTERNATES/s1200c/0_GettyImages-1356173992.jpg");
        Player reeceJames = new Player("Reece James", Nationality.ENGLISH, Position.DEFENDER, 6, 0, 82, 13, 8, 1, chelsea, "https://i2-prod.football.london/incoming/article23770360.ece/ALTERNATES/s1200c/0_GettyImages-1392623238.jpg");
        Player kante = new Player("N'Golo Kante", Nationality.FRENCH, Position.MIDFIELDER, 14, 2, 247, 21, 35, 1, chelsea, "https://www.si.com/.image/t_share/MTg5NDgzMjMwNjg3MTQzMTc0/imago1011447665h.jpg");
        Player kaiHavertz = new Player("Kai Havertz", Nationality.GERMAN, Position.FORWARD, 48, 8, 174, 28, 15, 0, chelsea, "https://static.independent.co.uk/2022/03/13/15/GettyImages-1384855166.jpg?quality=75&width=982&height=726&auto=webp");
        Player masonMount = new Player("Mason Mount", Nationality.ENGLISH, Position.MIDFIELDER, 38, 4, 137, 29, 14, 0, chelsea, "https://theprideoflondon.com/wp-content/uploads/getty-images/2017/07/1348215514.jpeg");

        Player ederson = new Player("Ederson Moraes", Nationality.BRAZILIAN, Position.GOALKEEPER, 0, 0, 256, 2, 25, 2, manCity, "https://cdn.vox-cdn.com/thumbor/1suat3b5YMkkZM4-x3tKIdo1V28=/0x0:3713x2475/1200x800/filters:focal(1596x604:2190x1198)/cdn.vox-cdn.com/uploads/chorus_image/image/65062826/1162204910.jpg.0.jpg");
        Player walker = new Player("Kyle Walker", Nationality.ENGLISH, Position.DEFENDER, 8, 0, 336, 34, 47, 1, manCity, "https://i.guim.co.uk/img/media/f2a77420f183f3a59cf3cb6871d33d78a5037002/0_126_2284_1370/master/2284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6cc41695b0a29ef12738c202ee182cc7");
        Player silva = new Player("Bernardo Silva", Nationality.PORTUGUESE, Position.MIDFIELDER, 53, 8, 267, 41, 30, 0, manCity, "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg3NzQ0MTUzNjAwMjcyMzUz/bernardo-cover-vs-everton-away.jpg");
        Player haaland = new Player("Erling Haaland", Nationality.NORWEGIAN, Position.FORWARD, 93, 20, 122, 30, 10, 0, manCity, "https://i2-prod.mirror.co.uk/incoming/article22819538.ece/ALTERNATES/s1200c/0_Borussia-Dortmund-v-Sport-Club-Freiburg-Bundesliga.jpg");
        Player deBruyne = new Player("Kevin de Bruyne", Nationality.BELGIAN, Position.MIDFIELDER,86, 24, 262, 106, 24, 1, manCity, "https://sm.imgix.net/18/06/kevin-de-bruyne.jpg?w=640&h=480&auto=compress,format&fit=clip");

        Player lloris = new Player("Hugo Lloris", Nationality.FRENCH, Position.GOALKEEPER, 0, 0, 574, 0, 5, 0, tottenham, "https://i2-prod.football.london/tottenham-hotspur-fc/players/article20142676.ece/ALTERNATES/s1200c/0_GettyImages-1231585530.jpg" );
        Player sanchez = new Player("Davinson Sánchez", Nationality.COLOMBIAN, Position.DEFENDER, 9, 0, 179, 1, 21, 1 , tottenham, "https://i2-prod.football.london/incoming/article24165348.ece/ALTERNATES/s1200c/0_GettyImages-1240691811.jpg" );
        Player winks = new Player("Harry Winks", Nationality.ENGLISH, Position.MIDFIELDER, 2, 1, 128, 3, 21, 0, tottenham, "https://i2-prod.football.london/incoming/article17843595.ece/ALTERNATES/s1200c/0_GettyImages-1209694147.jpg");
        Player son = new Player("Son Heung-min", Nationality.KOREAN, Position.FORWARD, 134, 33, 367, 62, 16, 3, tottenham, "https://i2-prod.football.london/tottenham-hotspur-fc/news/article23669886.ece/ALTERNATES/s1200c/0_GettyImages-1390539425.jpg");
        Player kane = new Player("Harry Kane", Nationality.ENGLISH, Position.FORWARD, 183, 50, 282, 47, 32, 0, tottenham, "https://i2-prod.football.london/tottenham-hotspur-fc/news/article23669886.ece/ALTERNATES/s1200c/0_GettyImages-1390539425.jpg");

        Player allison = new Player("Alisson Becker", Nationality.BRAZILIAN, Position.GOALKEEPER, 1, 0, 217, 2, 8, 1, liverpoolFC, "https://i2-prod.liverpoolecho.co.uk/incoming/article17825348.ece/ALTERNATES/s1200c/0_GettyImages-1203002776.jpg");
        Player vanDijk = new Player("Virgil van Dijk", Nationality.DUTCH, Position.DEFENDER, 31, 5, 336, 18, 28, 3, liverpoolFC, "https://i2-prod.mirror.co.uk/incoming/article21111289.ece/ALTERNATES/s1200c/1_Virgil-van-Dijk-File-Photo.jpg");
        Player tAA = new Player("Trent Alexander-Arnold", Nationality.ENGLISH, Position.DEFENDER, 10, 1, 161, 45, 15, 0, liverpoolFC, "https://pbs.twimg.com/media/EuHtlTjXcAUi3_9.jpg");
        Player henderson = new Player("Jordan Henderson", Nationality.ENGLISH, Position.MIDFIELDER, 33,2,396,54, 37, 2, liverpoolFC, "https://i2-prod.mirror.co.uk/incoming/article22700831.ece/ALTERNATES/s1200c/0_Liverpool-v-Leeds-United-Premier-League.jpg" );
        Player salah = new Player("Mohamed Salah", Nationality.EGYPTIAN, Position.FORWARD, 175, 46, 359, 87, 11, 1, liverpoolFC, "https://i2-prod.liverpoolecho.co.uk/incoming/article17825348.ece/ALTERNATES/s1200c/0_GettyImages-1203002776.jpg");

        // Ligue 1
        // Player(name, nationality, position, league goals, international goals, apps, assists, yellowCards, redCards, team, img)
        Player messi = new Player("Lionel Messi", Nationality.ARGENTINE, Position.MIDFIELDER, 480, 86, 546, 231, 50, 0, psg, "https://i2-prod.mirror.co.uk/incoming/article25417932.ece/ALTERNATES/s1200c/23_Olympique-Marseille-vs-Paris-Saint-Germain-France-24-Oct-2021.jpg");
        Player neymar = new Player("Neymar da Silva Santos Júnior", Nationality.BRAZILIAN, Position.FORWARD, 191, 74, 318, 116, 79, 7, psg, "https://i2-prod.mirror.co.uk/incoming/article27064871.ece/ALTERNATES/s1200c/0_Neymar.jpg" );
        Player mbappe = new Player("Kylian Mbappé", Nationality.FRENCH, Position.FORWARD, 135, 27, 183, 61, 26, 1, psg, "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5MjAzODIwNzg0NTI3MDk2/topshot-fbl-fra-ligue1-paris-dijon.jpg" );
        Player ramos = new Player("Sergio Ramos", Nationality.SPANISH, Position.DEFENDER, 76, 23, 520, 31, 161, 21, psg, "https://i2-prod.mirror.co.uk/incoming/article26822072.ece/ALTERNATES/s1200c/0_GettyImages-1240114889.jpg");
        Player donnarumma = new Player("Gianluigi Donnarumma", Nationality.ITALIAN, Position.GOALKEEPER, 0, 0, 232, 0, 18, 0, psg, "https://i2-prod.belfastlive.co.uk/incoming/article21043530.ece/ALTERNATES/s1200c/0_GettyImages-1328326369.jpg");

        Player nubel = new Player("Alexander Nubel", Nationality.GERMAN, Position.GOALKEEPER, 85, 0, 0, 0, 2 ,2, asMonaco,"https://pbs.twimg.com/media/FMxKqN7WUAU2kbT.jpg");
        Player badiashile = new Player("Benoît Badiashile", Nationality.FRENCH, Position.DEFENDER, 4, 0, 95, 2, 13, 0, asMonaco, "https://i2-prod.manchestereveningnews.co.uk/incoming/article23870899.ece/ALTERNATES/s1200c/0_GettyImages-1344934778.jpg");
        Player golovin = new Player("Aleksandr Golovin", Nationality.RUSSIAN, Position.MIDFIELDER, 23, 5, 184, 29, 28, 3, asMonaco, "https://i.guim.co.uk/img/media/c7e7abc90381541f5d5bd49a0ec9dd69815aa6c7/0_128_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b72b4e638206a1b87a43661a9a9f449c");
        Player volland = new Player("Kevin Volland", Nationality.GERMAN, Position.FORWARD, 102, 1, 316, 81, 51, 1, asMonaco, "https://pbs.twimg.com/media/FRW46-xWUAA6R4l.jpg");
        Player benYedder = new Player("Wissam Ben Yedder", Nationality.FRENCH, Position.FORWARD, 164, 3, 347, 57, 18, 1, asMonaco, "https://pbs.twimg.com/media/FHJP_X5X0AUhzBX.jpg");

        Player mandanda = new Player("Steve Mandanda", Nationality.CONGOLESE, Position.GOALKEEPER, 0, 0, 478, 0, 17, 3, marseille, "https://cdn.mos.cms.futurecdn.net/YZQVhQgqwXuFPEcVWLVyBD-1200-80.jpg");
        Player caletaCar = new Player("Duje Caleta-Car", Nationality.CROATIAN, Position.DEFENDER,9, 1, 186, 7, 37, 4, marseille, "https://i2-prod.mirror.co.uk/incoming/article23512354.ece/ALTERNATES/s1200c/0_Duje-Caleta-Car-Ben-Davies.jpg");
        Player payet = new Player("Dimitri Payet", Nationality.FRENCH, Position.MIDFIELDER, 93, 5, 147, 146, 58,4, marseille, "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg4NjI0NTMzNTgwNjg3MDky/dimitri-payet-goal-marseille.jpg" )
        Player milik = new Player("Arkadiusz Milik", Nationality.POLISH, Position.FORWARD, 99, 6, 245, 21, 25, 1, marseille, "https://i2-prod.mirror.co.uk/incoming/article22750940.ece/ALTERNATES/s1200c/1_US-Sassuolo-v-SSC-Napoli-Serie-A.jpg");
        Player guendouzi = new Player("Matteo Guendouzi", Nationality.FRENCH, Position.MIDFIELDER, 6, 1, 127, 13, 28, 0, marseille, "https://pbs.twimg.com/media/FAZTRddUYAA9TR-.jpg" )

        Player gomis = new Player("Alfred Gomis", Nationality.SENEGALESE, Position.GOALKEEPER, 0, 0, 117, 0, 3, 0, rennes, "https://i2-prod.leicestermercury.co.uk/incoming/article6814359.ece/ALTERNATES/s1200c/0_JS260207776.jpg");
        Player traore = new Player("Hamari Traore", Nationality.MALIAN, Position.DEFENDER, 7, 1, 232, 25, 45, 2, rennes, "https://medias.lequipe.fr/img-photo-jpg/hamari-traore-defenseur-de-rennes-v-michel-l-equipe/1500000001335387/451:29,1744:1322-1200-1200-75/508a3.jpg");
        Player bourigeaud = new Player("Benjamin Bourigeaud", Nationality.FRENCH, Position.MIDFIELDER, 37, 0, 191, 33, 26, 0, rennes, "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MDA3ODYzMjQ2MDA1NjMy/fbl-fra-cup-rennes-orleans-5d107b3196ebdcd766000017jpg.jpg");
        Player laborde = new Player("Gaëtan Laborde", Nationality.FRENCH, Position.FORWARD, 57, 0, 198, 31, 11, 1, rennes, "");
        Player terrier = new Player("Martin Terrier", Nationality.FRENCH, Position.MIDFIELDER, 44, 0, 162, 17, 9, 1, rennes, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/20191002_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Olympique_Lyonnais_by_Stepro_StP_0291.jpg/1200px-20191002_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Olympique_Lyonnais_by_Stepro_StP_0291.jpg");

        Player lopes = new Player("Anthony Lopes", Nationality.PORTUGUESE, Position.GOALKEEPER, 0,0,315,0,10,1,lyon,"https://medias.lequipe.fr/img-photo-jpg/anthony-lopes-fait-debat-sur-ses-gestes-consideres-parfois-comme-dangereux-a-martin-l-equipe/1500000001418295/446:38,1740:1331-1200-1200-75/32bca.jpg");
        Player boateng = new Player("Jérôme Boateng", Nationality.GERMAN, Position.DEFENDER,5,1,354,22,62,7, lyon, "https://pbs.twimg.com/media/E-SeDEuXoAAs0on.jpg");
        Player aouar = new Player("Houssem Aouar", Nationality.FRENCH, Position.MIDFIELDER, 29, 0, 163, 23, 10, 1, lyon, "https://i2-prod.liverpoolecho.co.uk/incoming/article21070539.ece/ALTERNATES/s1200c/0_GettyImages-1233072812.jpg");
        Player lacazette = new Player("Alexandre Lacazette", Nationality.FRENCH, Position.FORWARD, 154, 3, 361, 62, 39, 2, lyon, "https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/01/07/2966939-60894708-2560-1440.jpg");
        Player paqueta = new Player("Lucas Paquetá", Nationality.BRAZILIAN, Position.MIDFIELDER, 30, 7, 151, 16, 28, 3, lyon, "https://i2-prod.chroniclelive.co.uk/sport/football/football-news/article23355050.ece/ALTERNATES/s1200c/0_GettyImages-1373397761.jpg");


        // La Liga
        // Player(name, nationality, position, league goals, international goals, apps, assists, yellowCards, redCards, team, img)

        Player courtois = new Player("Thibaut Courtois", Nationality.BELGIAN, Position.GOALKEEPER, 0, 0, 403, 0, 15, 3, realMadrid, "https://cdn.givemesport.com/wp-content/uploads/2022/05/GettyImages-1399804215-1200x1200-c-default.jpg");
        Player alaba = new Player("David Alaba", Nationality.AUSTRIAN, Position.DEFENDER, 26, 14, 328, 32, 18, 0, realMadrid, "https://i.guim.co.uk/img/media/b880b98cc9c8b01f10a2adb441bf4e68f229d989/0_120_1732_1040/master/1732.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e3723eb3e0ee03576ac94055e0909991");
        Player modric = new Player("Luka Modric", Nationality.CROATIAN, Position.MIDFIELDER, 54, 22, 476, 93, 66, 1,realMadrid,"https://cdn.givemesport.com/wp-content/uploads/2022/01/22_01_17_992eebfa7bb3b7de83484a39a3f0609d_960-1-1200x1200-c-default.jpg");
        Player benzema = new Player("Karim Benzema", Nationality.FRENCH, Position.FORWARD, 262, 37, 527, 139, 11, 0, realMadrid, "https://i.guim.co.uk/img/media/c5981d6cb04d5390757c846e68df6f37524bd23f/0_270_6900_4140/master/6900.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e395c53f419cc37a29aa0910243547e2");
        Player viniciusJr = new Player("Vinícius José Paixão de Oliveira Júnior", Nationality.BRAZILIAN, Position.FORWARD, 31, 1, 154, 26, 19, 0, realMadrid, "https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/11/28/3262709-66771448-2560-1440.jpg");
        
        Player terStegen = new Player("Marc-André ter Stegen", Nationality.GERMAN, Position.GOALKEEPER, 0, 0, 325, 2, 9, 0, barcelona, "https://cdn.givemesport.com/wp-content/uploads/2022/03/GettyImages-1347865563-1200x1200-c-default.jpg");
        Player pique = new Player("Gerard Piqué", Nationality.SPANISH, Position.DEFENDER, 32, 6, 425, 9, 107, 8, barcelona, "https://img.bleacherreport.net/img/images/photos/003/331/627/hi-res-fda27e82ef0d644f3bf271472bad76b9_crop_exact.jpg?w=1200&h=1200&q=75");
        Player busquets = new Player("Sergio Busquets", Nationality.SPANISH, Position.MIDFIELDER, 11, 6, 451, 31, 121, 1, barcelona, "https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2015/11/27/1740487-36807946-2560-1440.jpg");
        Player dembele = new Player("Ousmane Dembele", Nationality.FRENCH, Position.FORWARD, 37, 3, 160, 45, 17, 1, barcelona, "https://i.guim.co.uk/img/media/e767a2e1d31fbec9ba11b74fb9460111f6f57e9e/338_102_3739_2245/master/3739.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=87e901130d34558303091b70e1ad114a");
        Player aubameyang = new Player("Pierre-Emerick Aubameyang", Nationality.GABONESE, );

        Player oblak = new Player("Jan Oblak", Nationality.SLOVENIAN, Position.GOALKEEPER, 0 );
        Player giminez = new Player("José María Giménez", Nationality.URUGUAYAN, Position.DEFENDER, );
        Player koke = new Player("Koke", Nationality.SPANISH, Position.MIDFIELDER,);
        Player griezmann = new Player("Antoine Griezmann", Nationality.FRENCH, Position.FORWARD, );
        Player felix = new Player("João Félix", Nationality.PORTUGUESE, Position.FORWARD);

        Player bounou = new Player("Yassine Bounou", Nationality.MOROCCAN, Position.GOALKEEPER, );
        Player kounde = new Player("Jules Kounde", Nationality.FRENCH, Position.DEFENDER, );
        Player rakitic = new Player("Ivan Rakitic", Nationality.CROATIAN, Position.MIDFIELDER, );
        Player ocampos = new Player("Lucas Ocampos", Nationality.ARGENTINE, Position.FORWARD);
        Player enNesyri = new Player("Youssef En-Nesyri", Nationality.MOROCCAN, Position.FORWARD);

        Player ruiSilva = new Player("Rui Silva", Nationality.PORTUGUESE, Position.GOALKEEPER, );
        Player bellerin = new Player("Hector Bellerin", Nationality.SPANISH, Position.DEFENDER, );
        Player guardado = new Player("Andrés Guardado", Nationality.MEXICAN, Position.MIDFIELDER, );
        Player fekir = new Player("Nabil Fekir", Nationality.FRENCH, Position.FORWARD, );
        Player carvalho = new Player("William Carvalho", Nationality.PORTUGUESE, Position.MIDFIELDER, );


        // Serie A
        // Player(name, nationality, position, league goals, international goals, apps, assists, yellowCards, redCards, team, img)

        Player szczesny = new Player("Wojciech Szczesny", Nationality.POLISH, Position.GOALKEEPER, 0, 0, 341, 0, 11, 0, juventus, "https://pbs.twimg.com/media/EQgfebIWsAEoKx0.jpg");
        Player bonucci = new Player("Leonardo Bonucci", Nationality.ITALIAN, Position.DEFENDER, 31, 8, 415, 7, 75, 3, juventus, "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg1NTA2MDYyNTE2ODg4NjU4/imago1008213591h.jpg");
        Player pogba = new Player("Paul Pogba", Nationality.FRENCH, Position.MIDFIELDER, 57, 11, 281, 69, 48, 3, juventus, "https://imgresizer.eurosport.com/unsafe/1200x1200/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2013/04/06/984586-19360789-2560-1440.jpg");
        Player morata = new Player("Álvaro Morata", Nationality.SPANISH, Position.FORWARD, 94, 26, 289, 44, 51, 3, juventus, "https://i2-prod.mirror.co.uk/incoming/article27084893.ece/ALTERNATES/s1200c/0_Alvaro-Morata.jpg");
        Player deLigt = new Player("Matthijs De Ligt", Nationality.DUTCH, Position.DEFENDER, 16, 2, 164, 5, 21, 1, juventus, "https://i2-prod.football.london/incoming/article21699173.ece/ALTERNATES/s1200c/0_GettyImages-1235529508.jpg");

        Player maignan = new Player("Mike Maignan", Nationality.FRENCH, Position.GOALKEEPER, 0, 0, 181, 1, 3, 0, acMilan, "https://assets-fr.imgfoot.com/media/cache/1200x1200/mike-maignan-ac-milan-2021.jpg");
        Player romagnoli = new Player("Alessio Romagnoli", Nationality.ITALIAN, Position.DEFENDER, 11, 2, 240, 4, 56, 5, acMilan, "https://img.bleacherreport.net/img/images/photos/003/753/234/hi-res-2e4b49b1a58572b332087c2b21693ee5_crop_exact.jpg?w=1200&h=1200&q=75");
        Player bennacer = new Player("Ismael Bennacer", Nationality.ALGERIAN, Position.MIDFIELDER, 3, 2, 130, 8, 32, 0, acMilan, "https://i2-prod.football.london/incoming/article18337140.ece/ALTERNATES/s1200c/0_GettyImages-1202641942.jpg");
        Player ibrahimovic = new Player("Zlatan Ibrahimovic", Nationality.SWEDISH, Position.FORWARD, );
        Player giroud = new Player("Olivier Giroud", Nationality.FRENCH, Position.FORWARD, );

        Player handanovic = new Player("Samir Handanovic", Nationality.SLOVENIAN, Position.GOALKEEPER, );
        Player skriniar = new Player("Milan Skriniar", Nationality.SLOVAK, Position.DEFENDER, );
        Player vidal = new Player("Arturo Vidal", Nationality.CHILEAN, Position.MIDFIELDER, );
        Player dzeko = new Player("Edin Dzeko", Nationality.BOSNIAN, Position.FORWARD, );
        Player alexisSanchez = new Player("Alexis Sanchez", Nationality.CHILEAN, Position.FORWARD, );

        Player ospina = new Player("David Ospina", Nationality.COLOMBIAN, Position.GOALKEEPER, );
        Player koulibaly = new Player("Kalidou Koulibaly", Nationality.SENEGALESE, Position.DEFENDER, );
        Player ruiz = new Player("Fabián Ruiz", Nationality.SPANISH, Position.MIDFIELDER, );
        Player mertens = new Player("Dries Mertens", Nationality.BELGIAN, Position.FORWARD, );
        Player osimhen = new Player("Victor Osimhen", Nationality.NIGERIAN, Position.FORWARD, );

        Player patricio = new Player("Rui Patricio", Nationality.PORTUGUESE, Position.GOALKEEPER, );
        Player spinazzola = new Player("Leonardo Spinazzola", Nationality.ITALIAN, Position.DEFENDER, );
        Player mkhitaryan = new Player("Henrikh Mkhitaryan", Nationality.ARMENIAN, Position.MIDFIELDER, );
        Player abraham = new Player("Tammy Abraham", Nationality.ENGLISH, Position.FORWARD, );
        Player oliveira = new Player("Sergio Oliveira", Nationality.PORTUGUESE, Position.MIDFIELDER, );




        playerRepository.saveAll(Arrays.asList(
                cristanoRonaldo, jadonSancho, deGea, harryMaguire, fred,
                edouardMendy, reeceJames, kante, kaiHavertz, masonMount,
                ederson, walker, silva, haaland, deBruyne,
                lloris, sanchez, winks, son, kane,
                allison, vanDijk, tAA, henderson, salah,

                messi, neymar, mbappe, ramos, donnarumma,
                nubel, badiashile, golovin, volland, benYedder,
                mandanda, caletaCar, payet, milik, guendouzi,
                gomis, traore, bourigeaud, laborde, terrier,
                lopes, boateng, aouar, lacazette, paqueta,

                courtois, alaba, modric, benzema, viniciusJr,
                terStegen, pique, busquets, dembele, aubameyang,
                oblak, giminez, koke, griezmann, felix,
                bounou, kounde, rakitic, ocampos, enNesyri,
                ruiSilva, bellerin, guardado, fekir, carvalho,

                szczesny, bonucci, pogba, morata, deLigt,
                maignan, romagnoli, bennacer, ibrahimovic, giroud,
                handanovic, skriniar, vidal, dzeko, alexisSanchez,
                ospina, koulibaly, ruiz, mertens, osimhen,
                patricio, spinazzola, mkhitaryan, abraham, oliveira));

    User user1 = new User("Lily", "Lily101@gmail.com", "Chelsea1!", 0, false);
    User user2 = new User("Luke", "Luke13@gmail.com", "Arsenal1!", 0, true);
    User user3 = new User("Ellie", "Ellie123@gmail.com", "Devil123!", 0, false);
    User user4 = new User("Elias", "Elias22@gmail.com", "Pool13!", 0, false);
    User user5 = new User("Paul", "Joel2@gmail.com", "Parisians1!", 0, true);
    User user6 = new User("Fernando", "Fer12@gmail.com","RealDeal15", 0, true);
    User user7 = new User("Pedro", "Pedro23@gmail.com","Porto4life", 0, false);
    User user8 = new User("Guiseppe", "G123@gmail.com","Acmilan123!", 0, true);

    userRepository.saveAll(Arrays.asList(user1, user2, user3, user4, user5, user6, user7, user8));

    }
}

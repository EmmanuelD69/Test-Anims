/* source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp */

/* obtention des coordonnées des lettres pour l'animation SVG de départ
const logo = document.querySelectorAll("logo, path");
console.log(logo);

for (let i = 0; i < logo.length; i++) {
  console.log("letter " + i + " is " + logo[i].getTotalLength());
}*/

/* CE CODE EST EN VERSION 1.0, JE VAIS LE RETRAVAILLER EN MODE OBJETS PROCHAINEMENT */
console.log(
  "Bonjour et bienvenue sur mon site perso. J'espère que mon code vous intéressera, il est en évolution constante car actuellement je n'ai pas encore refactorisé celui-çi. J'ai fais en sorte que le site soit fonctionnel et responsive. Je suis donc à ma version 1.0 et tout reste à développer. Si vous souhaitez me contacter, n'hésitez pas, je suis en recherche active d'un poste de développeur web. Merci et bonne lecture."
);

/* Création d'une variable pour scroll up le texte lorsqu'on passe d'un lien à l'autre */
var scrollTop = {
  left: 0,
  top: 0,
  behavior: "smooth"
};

// Pointeurs vers les sections principales du site
var leftside = document.getElementById("left-side");
var rightside = document.getElementById("site-main");
var textes = document.getElementById("textes");

// Pointeur vers la photo principale
var photo = document.getElementById("mainPhoto");

// Pointeur vers la vidéo
var video = document.getElementById("mp4");

//Pointeurs vers les liens de navigation
var navLink1 = document.getElementById("about");
var navLink2 = document.getElementById("hobbies");
var navLink3 = document.getElementById("ilike");
var navLink4 = document.getElementById("contact");

// Pointeurs vers les paragraphes
var paragraphe1 = document.getElementById("paragraphe1");
var paragraphe2 = document.getElementById("paragraphe2");
var paragraphe3 = document.getElementById("paragraphe3");
var paragraphe4 = document.getElementById("paragraphe4");
var paragraphe5 = document.getElementById("paragraphe5");
var paragraphe6 = document.getElementById("paragraphe6");

// Pointeurs vers les sous-titres
var subtitle1 = document.getElementById("subtitle1");
var subtitle2 = document.getElementById("subtitle2");
var subtitle3 = document.getElementById("subtitle3");
var subtitle4 = document.getElementById("subtitle4");

/* Fonctions pour changer contenus en fonction de l'onglet menu cliqué */
function aboutContent() {
  textes.scrollTo(scrollTop);
  navLink1.style.color = "#c26464";
  navLink2.style.color = "#343434";
  navLink3.style.color = "#343434";
  navLink4.style.color = "#343434";
  photo.src = "img/emmanuel.jpg";
  // video.style.display = "none";
  document.getElementById("section-title").innerHTML = "ABOUT";
  subtitle1.style.display = "none";
  subtitle1.innerHTML = "";
  paragraphe1.style.display = "block";
  paragraphe1.innerHTML =
    "Née le 28 juin 1976 à Avignon, dans la belle région de Provence située au sud est de la France, j'ai suivi des études techniques en électronique avant de me lancer dans la vie active et monter ma propre petite entreprise de restauration à Saint Rémy de Provence.";
  subtitle2.style.display = "none";
  subtitle2.innerHTML = "";
  paragraphe2.style.display = "block";
  paragraphe2.innerHTML =
    "Cette belle aventure a durée presque cinq ans et m'a enseignée énormément de choses: <br>  -Le commerce, <br> -La gestion d'entreprise, <br> -La communication, <br> Mais plus important, sur la vie !<br> Très bonne école.";
  subtitle3.style.display = "none";
  subtitle3.innerHTML = "";
  paragraphe3.style.display = "block";
  paragraphe3.innerHTML =
    "J'ai repris des études en Informatique et obtenu deux diplômes: <br> -Technicien de maintenance informatique et réseaux, <br> -Ingénierie des réseaux industriels et services multimédia.";
  subtitle4.style.display = "none";
  subtitle4.innerHTML = "";
  paragraphe4.style.display = "block";
  paragraphe4.innerHTML =
    "A la suite de quoi mon parcours professionnel m'a mené dans la prestation de services où j'ai pu travailler aussi bien en mode BtC / BtB et découvrir des environnements divers, Nationaux et Internationaux. <br> ERDF / GRDF / LA POSTE / VEOLIA / DALKIA / MERIAL / SANOFI. <br> Plus récemment j'ai suivi deux formations complémentaires de Développeur web et suis actuellement en recherche active pour un poste de développeur front end ou chef de projet junior. ";
  subtitle5.style.display = "none";
  subtitle5.innerHTML = "";
  paragraphe5.style.display = "block";
  paragraphe5.innerHTML =
    "J'ai pu aussi assouvir l'une de mes passions, le Djing, en travaillant dans des bars et boites de nuits sur Avignon, Lyon et St Etienne.";
  subtitle6.style.display = "none";
  subtitle6.innerHTML = "";
  paragraphe6.style.display = "block";
  paragraphe6.innerHTML =
    "Très tôt, j'ai développé un intérêt pour la musique, le gaming et la communication sous toutes ses formes.";
}

function hobbiesContent() {
  textes.scrollTo(scrollTop);
  navLink1.style.color = "#343434";
  navLink2.style.color = "#c26464";
  navLink3.style.color = "#343434";
  navLink4.style.color = "#343434";
  // leftside.style.width = "0%";
  // leftside.style.display = "none";
  // rightside.style.width = "100%";
  photo.src = "img/DjDodgeman2.png";
  // photo.style.display = "none";
  // video.src = "/video/dj2.mp4";
  // video.style.display = "block";
  document.getElementById("section-title").innerHTML = "HOBBIES";
  subtitle1.innerHTML = "DJING";
  subtitle1.style.display = "block";
  paragraphe1.innerHTML =
    "Thriller - Michael Jackson a été mon premier achat et reste pour moi le meilleur album de musique Pop de tous les temps. J'ai écouté la radio très tôt et enregistré mes premières cassettes, m'amusant à les couper / coller pour faire des enchaînements… cela n'est qu'à partir de 1993 que j'ai acheté mes premières platines et vinyles accompagnés d'une table de mixage Numark et d'un gros caisson de basse à moitié moisi, mais qui tapait fort :D";
  paragraphe1.style.display = "block";
  subtitle2.innerHTML = "";
  subtitle2.style.display = "none";
  paragraphe2.innerHTML =
    "DJing est devenu une véritable passion que je continue de pratiquer fréquemment à titre personnel ou occasionnellement lors de soirées / évènements dans des pubs / boites de nuit.";
  paragraphe2.style.display = "block";
  subtitle3.innerHTML = "";
  subtitle3.style.display = "none";
  paragraphe3.innerHTML =
    'J\'ai un mixcloud que j\'utilise de temps en temps et où l\'on peut écouter certains de mes mix <br> <a href="https://www.mixcloud.com/emmanuel-durouge" target="_blank">cliquez ici</a> pour accéder à mon Mixcloud.';
  paragraphe3.style.display = "block";
  subtitle4.innerHTML = "GAMING";
  subtitle4.style.display = "block";
  paragraphe4.innerHTML =
    "Mon premier ordinateur fût un IBM Amstrad PC1512 et depuis la fin des années 80, j'ai passé d'interminables heures sur des jeux tels que: <br> -Civilization <br> -Elite Dangerous <br> -Anarchy online <br> -World of Warcraft <br> -Ark online <br> -Second Life <br> pour n'en citer que quelques-uns…  <br> J'ai développé très jeune une forte appétence pour le Gaming, que je pratique au quotidien.";
  paragraphe4.style.display = "block";
  subtitle5.innerHTML = "";
  subtitle5.style.display = "none";
  paragraphe5.style.display = "none";
  paragraphe5.innerHTML = "";
  subtitle6.innerHTML = "";
  subtitle6.style.display = "none";
  paragraphe6.style.display = "none";
  paragraphe6.innerHTML = "";
}

function iLikeContent() {
  textes.scrollTo(scrollTop);
  navLink1.style.color = "#343434";
  navLink2.style.color = "#343434";
  navLink3.style.color = "#c26464";
  navLink4.style.color = "#343434";
  photo.src = "img/history.png";
  // video.style.display = "none";
  document.getElementById("section-title").innerHTML = "I LIKE";
  subtitle1.innerHTML = "HISTOIRE";
  subtitle1.style.display = "block";
  paragraphe1.innerHTML =
    "C'est simple, j'adore l'histoire, peu importe l'époque, j'ai toujours été intéressé par le sujet. Géopolitique, conquêtes, civilisations, cultures du monde, peu importe le sujet, je dévore avec grand plaisir les documentaires, articles, revues qui me passent à portée.";
  paragraphe1.style.display = "block";
  subtitle2.innerHTML = "COMMUNICATION";
  subtitle2.style.display = "block";
  paragraphe2.innerHTML =
    "CQ, CQ, CQ DX.... <br> CQ veut dire un appel général à toutes stations (provient de l'anglais Seek You --> je vous recherche), la mention DX spécifie des stations longues distances. <br> J'ai eu la chance de lancer des appels sur les ondes longues distances (communications radio) à la fin des années 90 et jusqu'au milieu des années 2000, établissant de très beaux contacts humains avec les quatre coins du monde. Un très bon moyen de développer son anglais ! <br> <p>Depuis l'arrivée d'internet, c'est au travers des médias comme Facebook, Mixcloud, Discord, Twitch…. que je communique.</p>";
  paragraphe2.style.display = "block";
  subtitle3.innerHTML = "MUSIC SURF";
  subtitle3.style.display = "block";
  paragraphe3.innerHTML =
    "Le Djing étant l'une de mes passions, je ne peux rester sans découvrir de nouveaux artistes ou redécouvrir les standards qui ont fait danser des générations entières. <br> Je passe donc souvent du temps à rechercher les pépites à venir, notamment en ce qui concerne la musique électronique qui reste mon style favori. <br> Comme chez un disquaire, je navigue sur les sites web de musique à la recherche des hits à venir, de nouveaux talents de la scène électronique et l'inspiration pour mes futurs mixes.";
  paragraphe3.style.display = "block";
  subtitle4.style.display = "block";
  subtitle4.innerHTML = "WEB DEVELOPMENT";
  paragraphe4.style.display = "block";
  paragraphe4.innerHTML =
    "Pourvoir créer un espace sur le net où l'on puisse s'exprimer, présenter ses créations, laisser libre cours à son imagination et l'exposer au monde entier ou tout du moins à ceux que cela intéresse. <br> Voilà une autre forme de communication qui m'a toujours plu et que j'ai toujours voulu apprendre et mettre en application. <br> Depuis mai 2017 j'ai pris la décision de me consacrer au développement web en suivant une formation de développeur full stack, comprenez par là, développeur avec une connaissance globale des langages utilisés pour développer des sites web. <br> Il en est ressorti une appétence plus prononcée pour le Front end, la partie visuelle, la vitrine, ce que l'on voit en premier en se connectant à un site web.";
  subtitle5.style.display = "none";
  subtitle5.innerHTML = "";
  paragraphe5.style.display = "none";
  paragraphe5.innerHTML = "";
  subtitle6.style.display = "none";
  subtitle6.innerHTML = "";
  paragraphe6.style.display = "none";
  paragraphe6.innerHTML = "";
}

function portfolioContent() {
  textes.scrollTo(scrollTop);
  navLink1.style.color = "#343434";
  navLink2.style.color = "#343434";
  navLink3.style.color = "#343434";
  navLink4.style.color = "#c26464";
  photo.src = "img/coding.jpg";
  // video.style.display = "none";
  document.getElementById("section-title").innerHTML = "PORTFOLIO";
  subtitle1.style.display = "block";
  subtitle1.innerHTML = "Mon site web professionnel";
  paragraphe1.style.display = "block";
  paragraphe1.innerHTML =
    '<section id="emmanuelDev"><a id="emmanuelDevCapture" href="https://projet.emmanueldev.com/" target="_blank"><img class="portfolioPictures" src="img/emmanueldev.png"></a><p id="emmanuelDevBio">Il a été réalisé en combinant mes connaissances en html, css et JavaScript, tout en y ajoutant des contenus et idées trouvées sur le web.</p></section>';
  subtitle2.style.display = "block";
  subtitle2.innerHTML = "Mon site Wordpress";
  paragraphe2.style.display = "block";
  paragraphe2.innerHTML =
    '<section id="emmanuelDevWordpress"><p id="emmanuelDevWordpressBio">Voici mon site Wordpress, réalisé à l\'aide de Divi, un outil permettant la construction de site par ajout de modules. Pas vraiment de programmation ,mais une connaissance de Wordpress nécessaire.</p><a id="emmanuelDevWordpressCapture" href="https://emmanueldev.com/" target="_blank"><img class="portfolioPictures" src="img/emmanueldevWordpress.png"></a></section>';
  subtitle3.style.display = "block";
  subtitle3.innerHTML = "Site réalisé pour un ébéniste tradition";
  paragraphe3.style.display = "block";
  paragraphe3.innerHTML =
    '<section id="lithoxoou"><a id="lithoxoouCapture" href="https://lithoxoou.wordpress.com/" target="_blank"><img class="portfolioPictures" src="img/lithoxoouT.png"></a><p id="lithoxoouBio">Je suis très heureux d\'avoir pu réaliser ce site vitrine pour un proche vivant en Grèce. Là encore, pas de programmation mais l\'usage des modules de Wordpress pour mettre en place le site.</p></section>';
  subtitle4.style.display = "block";
  subtitle4.innerHTML = "Site pour un Dj / Producer";
  paragraphe4.style.display = "block";
  paragraphe4.innerHTML =
    '<section id="lecoMusik"><p id="lecoBio">Cette page vitrine a été réalisé pour un ami DJ/Producer, il s\'agit d\'un code simple alliant html / css avec des animations sympa.</p><a id="lecoCapture" href="http://www.lecomusik.com/" target="_blank"><img class="portfolioPictures" src="img/leco.png"></a></section>';
  subtitle5.style.display = "none";
  subtitle5.innerHTML = "";
  paragraphe5.style.display = "none";
  paragraphe5.innerHTML = "";
  subtitle6.style.display = "none";
  subtitle6.innerHTML = "";
  paragraphe6.style.display = "none";
  paragraphe6.innerHTML = "";
}

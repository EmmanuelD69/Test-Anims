const logo = document.querySelectorAll("logo, path");
console.log(logo);

for (let i = 0; i < logo.length; i++) {
  console.log("letter " + i + " is " + logo[i].getTotalLength());
}

var paragraphe1 = document.getElementById("paragraphe1");
var paragraphe2 = document.getElementById("paragraphe2");
var paragraphe3 = document.getElementById("paragraphe3");
var paragraphe4 = document.getElementById("paragraphe4");
var paragraphe5 = document.getElementById("paragraphe5");
var paragraphe6 = document.getElementById("paragraphe6");

var subtitle1 = document.getElementById("subtitle1");
var subtitle2 = document.getElementById("subtitle2");
var subtitle3 = document.getElementById("subtitle3");
var subtitle4 = document.getElementById("subtitle4");

// function addSubtitle() {
//   var subtitle = document.createElement("h2");
//   var title = (subtitle.innerHTML = "GAMING");
//   subtitle.appendChild(title);
//   document.getElementById("paragraphe1").appendChild(subtitle);
// }

function aboutContent() {
  document.getElementById("section-title").innerHTML = "ABOUT";
  document.getElementById("subtitle1").innerHTML = "";
  document.getElementById("paragraphe1").innerHTML =
    "Née le 28 juin 1976 à Avignon, dans la belle région de Provence situé au sud est de la France, j'ai suivi des études technique en élécrtonique avant de me lancer dans la vie active et monter ma propre petite entreprise de restauration à St Rémy de Provence.";
  document.getElementById("subtitle2").innerHTML = "";
  document.getElementById("paragraphe2").innerHTML =
    "Cette belle aventure a durée presque 5 ans et m'a enseignée énormément de choses sur: <br>  -Le commerce <br> -La gestion d'entreprise <br> -La communication <br> Mais plus important, sur la vie! Très bonne école.";
  document.getElementById("subtitle3").innerHTML = "";
  document.getElementById("paragraphe3").innerHTML =
    "J'ai repris des études en Informatique et obtenu 2 diplômes: <br> -Technicien de maintenance informatique et réseaux <br> -Ingénierie des réseaux industriels et services multimédia";
  document.getElementById("paragraphe4").innerHTML =
    "A la suite de quoi mon parcours professionnel m'a mené dans la prestation de services où j'ai pu travailler aussi bien en mode BtC / BtB et découvrir des environnements divers, Nationaux et Internationaux. <br> J'ai collaboré au sein d'entreprises tels que: <br> ERDF / GRDF / LA POSTE / VEOLIA / DALKIA / MERIAL / SANOFI ...";
  document.getElementById("paragraphe5").innerHTML =
    "J'ai pu aussi assouvir l'une de mes passions, le Djing, en travaillant dans des bars et boites de nuits sur Avignon, Lyon, et St Etienne.";
  document.getElementById("paragraphe6").innerHTML =
    "Très tôt, j'ai développé un intérêt pour la musique, le gaming et la communication sous toutes ses formes.";
}

function hobbiesContent() {
  document.getElementById("section-title").innerHTML = "HOBBIES";
  document.getElementById("subtitle1").innerHTML = "GAMING";
  document.getElementById("paragraphe1").innerHTML =
    "Mon premier ordinateur fût un IBM Amstrad PC1512 et depuis la fin des années 80, j'ai passé d'interminables heures sur des jeux comme: <br> -Civilization <br> -Elite Dangerous <br> -Anarchy online <br> -World of Warcraft <br> -Ark online <br> -Second Life <br> pour n'en citer que quelques uns…  <br> J'ai développé très jeune une forte appétence pour le Gaming, que je pratique au quotidien.";
  document.getElementById("subtitle2").innerHTML = "DJING";
  document.getElementById("paragraphe2").innerHTML =
    "Thriller - Michael Jackson a été mon premier achat, et reste pour moi le meilleur album de Pop music de tous les temps. J'ai écouté la radio très tôt et enregistré mes premières cassettes, m'amusant à les couper / coller pour faire des enchainements… cela n'est qu'à partir de 1993 que j'ai acheté mes premières platines et vinyles accompagnés d'une table de mixage Numark et d'un gros caisson de basse à moitié moisi mais qui tapait fort :D";
  document.getElementById("subtitle3").innerHTML = "";
  document.getElementById("paragraphe3").innerHTML =
    "DJing est devenu une véritable passion que je continue de pratiquer fréquemment à titre personnel ou occasionnellement lors de soirées / évènements dans des pubs / nightclubs.";
  document.getElementById("subtitle4").innerHTML = "";
  document.getElementById("paragraphe4").innerHTML =
    'J\'ai un mixcloud que j\'utilise de temps en temps, et où l\'on peux écouter certains de mes mix <br> <a href="https://www.mixcloud.com/emmanuel-durouge" target="_blank">cliquez ici</a> pour acceder à mon Mixcloud.';
  document.getElementById("paragraphe5").innerHTML = "";
  document.getElementById("paragraphe6").innerHTML = "";
}

function iLikeContent() {
  document.getElementById("section-title").innerHTML = "I LIKE";
  document.getElementById("subtitle1").innerHTML = "HISTOIRE";
  document.getElementById("paragraphe1").innerHTML =
    "C'est simple, j'adore l'histoire, peu importe l'époque, j'ai toujours été intéressé par le sujet. Géopolitique, conquêtes, civilisations, cultures du monde, peu importe le sujet, je dévore avec grand plaisir les documentaires, articles, revues qui me passent à portée.";
  document.getElementById("subtitle2").innerHTML = "COMMUNICATION";
  document.getElementById("paragraphe2").innerHTML =
    "CQ, CQ, CQ DX.... <br> CQ veut dire un appel général à toutes stations (provient de l'anglais Seek You --> je vous recherche), la mention DX spécifie des stations longues distances. <br> J'ai eu la chance de lancer des appels sur les ondes longues distances (communications radio) à la fin des années 90 et jusqu'au milieu des années 2000, établissant de très beaux contacts humains avec les quatre coins du monde. Un très bon moyen de développer son anglais! <br> <p>Depuis l'arrivée d'internet, c'est au travers des médias comme Facebook, Mixcloud, Discord, Twitch…. que je communique.</p>";
  document.getElementById("subtitle3").innerHTML = "MUSIC SURF";
  document.getElementById("paragraphe3").innerHTML =
    "Le Djing étant l'une de mes passions, je ne peux rester sans découvrir de nouveaux artistes ou re découvrir les standards qui ont fait danser des générations entières. <br> Je passe donc souvent du temps à rechercher les pépites à venir, notamment en ce qui concerne la musique électronique qui reste mon style favori. <br> Comme chez un disquaire, je navigue sur les sites web de musique à la recherche des hits à venir, des nouveaux talents de la scène électro et l'inspiration pour mes futurs mixes.";
  document.getElementById("paragraphe4").innerHTML = "";
  document.getElementById("paragraphe5").innerHTML = "";
  document.getElementById("paragraphe6").innerHTML = "";
}

function contactContent() {
  document.getElementById("section-title").innerHTML = "CONTACT";
  document.getElementById("subtitle1").innerHTML =
    'GMAIL<br><a href="mailto:emmanueldevfr@gmail.com"><img class="socialIcons" src="img/gmail.png"></a>';
  document.getElementById("paragraphe1").innerHTML = "";
  document.getElementById("subtitle2").innerHTML =
    'YAHOO<br><a href="mailto:emmanueldurouge@yahoo.com"><img class="socialIcons" src="img/yahoo.png"></a>';
  document.getElementById("paragraphe2").innerHTML = "";
  document.getElementById("subtitle3").innerHTML =
    'FACEBOOK<br><a href="https://www.facebook.com/emmanuel.durouge/" target="_blank"><img class="socialIcons" src="img/facebook.png"><br>Vous devez être connecté à FB pour voir mon profile.</a>';
  document.getElementById("paragraphe3").innerHTML = "";
  document.getElementById("paragraphe4").innerHTML = "";
  document.getElementById("paragraphe5").innerHTML = "";
  document.getElementById("paragraphe6").innerHTML = "";
}

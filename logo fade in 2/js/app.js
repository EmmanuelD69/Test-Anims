const logo = document.querySelectorAll("logo, path");
console.log(logo);

for (let i = 0; i < logo.length; i++) {
  console.log("letter " + i + " is " + logo[i].getTotalLength());
}

// Pointage vers la photo principale
var photo = document.getElementById("mainPhoto");

console.log(photo);

// Pointeurs de paragraphes
var paragraphe1 = document.getElementById("paragraphe1");
var paragraphe2 = document.getElementById("paragraphe2");
var paragraphe3 = document.getElementById("paragraphe3");
var paragraphe4 = document.getElementById("paragraphe4");
var paragraphe5 = document.getElementById("paragraphe5");
var paragraphe6 = document.getElementById("paragraphe6");

// Pointeurs de sous-titres
var subtitle1 = document.getElementById("subtitle1");
var subtitle2 = document.getElementById("subtitle2");
var subtitle3 = document.getElementById("subtitle3");
var subtitle4 = document.getElementById("subtitle4");

// function addImg() {
//   var image = document.createElement("img");
//   var imgContent = (image.innerHTML = 'id="mainPhoto" src="img/event.jpg"');
//   image.appendChild(imgContent);
//   var img = document.getElementById("left-side");
//   img.appendChild(image);
// }

function aboutContent() {
  photo.src = "img/28842525.jpg";
  document.getElementById("section-title").innerHTML = "ABOUT";
  subtitle1.style.display = "none";
  subtitle1.innerHTML = "";
  paragraphe1.style.display = "block";
  paragraphe1.innerHTML =
    "Née le 28 juin 1976 à Avignon, dans la belle région de Provence situé au sud est de la France, j'ai suivi des études technique en élécrtonique avant de me lancer dans la vie active et monter ma propre petite entreprise de restauration à St Rémy de Provence.";
  subtitle2.style.display = "none";
  subtitle2.innerHTML = "";
  paragraphe2.style.display = "block";
  paragraphe2.innerHTML =
    "Cette belle aventure a durée presque 5 ans et m'a enseignée énormément de choses sur: <br>  -Le commerce <br> -La gestion d'entreprise <br> -La communication <br> Mais plus important, sur la vie! Très bonne école.";
  subtitle3.style.display = "none";
  subtitle3.innerHTML = "";
  paragraphe3.style.display = "block";
  paragraphe3.innerHTML =
    "J'ai repris des études en Informatique et obtenu 2 diplômes: <br> -Technicien de maintenance informatique et réseaux <br> -Ingénierie des réseaux industriels et services multimédia";
  subtitle4.style.display = "none";
  subtitle4.innerHTML = "";
  paragraphe4.style.display = "block";
  paragraphe4.innerHTML =
    "A la suite de quoi mon parcours professionnel m'a mené dans la prestation de services où j'ai pu travailler aussi bien en mode BtC / BtB et découvrir des environnements divers, Nationaux et Internationaux. <br> J'ai collaboré au sein d'entreprises tels que: <br> ERDF / GRDF / LA POSTE / VEOLIA / DALKIA / MERIAL / SANOFI ...";
  subtitle5.style.display = "none";
  subtitle5.innerHTML = "";
  paragraphe5.style.display = "block";
  paragraphe5.innerHTML =
    "J'ai pu aussi assouvir l'une de mes passions, le Djing, en travaillant dans des bars et boites de nuits sur Avignon, Lyon, et St Etienne.";
  subtitle6.style.display = "none";
  subtitle6.innerHTML = "";
  paragraphe6.style.display = "block";
  paragraphe6.innerHTML =
    "Très tôt, j'ai développé un intérêt pour la musique, le gaming et la communication sous toutes ses formes.";
}

function hobbiesContent() {
  photo.src = "img/gaming.jpg";
  console.log(photo);
  document.getElementById("section-title").innerHTML = "HOBBIES";
  subtitle1.innerHTML = "GAMING";
  subtitle1.style.display = "block";
  paragraphe1.innerHTML =
    "Mon premier ordinateur fût un IBM Amstrad PC1512 et depuis la fin des années 80, j'ai passé d'interminables heures sur des jeux comme: <br> -Civilization <br> -Elite Dangerous <br> -Anarchy online <br> -World of Warcraft <br> -Ark online <br> -Second Life <br> pour n'en citer que quelques uns…  <br> J'ai développé très jeune une forte appétence pour le Gaming, que je pratique au quotidien.";
  paragraphe1.style.display = "block";
  subtitle2.innerHTML = "DJING";
  subtitle2.style.display = "block";
  paragraphe2.innerHTML =
    "Thriller - Michael Jackson a été mon premier achat, et reste pour moi le meilleur album de Pop music de tous les temps. J'ai écouté la radio très tôt et enregistré mes premières cassettes, m'amusant à les couper / coller pour faire des enchainements… cela n'est qu'à partir de 1993 que j'ai acheté mes premières platines et vinyles accompagnés d'une table de mixage Numark et d'un gros caisson de basse à moitié moisi mais qui tapait fort :D";
  paragraphe2.style.display = "block";
  subtitle3.innerHTML = "";
  subtitle3.style.display = "none";
  paragraphe3.innerHTML =
    "DJing est devenu une véritable passion que je continue de pratiquer fréquemment à titre personnel ou occasionnellement lors de soirées / évènements dans des pubs / nightclubs.";
  paragraphe3.style.display = "block";
  subtitle4.innerHTML = "";
  subtitle4.style.display = "none";
  paragraphe4.innerHTML =
    'J\'ai un mixcloud que j\'utilise de temps en temps, et où l\'on peux écouter certains de mes mix <br> <a href="https://www.mixcloud.com/emmanuel-durouge" target="_blank">cliquez ici</a> pour acceder à mon Mixcloud.';
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
  photo.src = "img/disquaire.jpg";
  document.getElementById("section-title").innerHTML = "I LIKE";
  subtitle1.innerHTML = "HISTOIRE";
  subtitle1.style.display = "block";
  paragraphe1.innerHTML =
    "C'est simple, j'adore l'histoire, peu importe l'époque, j'ai toujours été intéressé par le sujet. Géopolitique, conquêtes, civilisations, cultures du monde, peu importe le sujet, je dévore avec grand plaisir les documentaires, articles, revues qui me passent à portée.";
  paragraphe1.style.display = "block";
  subtitle2.innerHTML = "COMMUNICATION";
  subtitle2.style.display = "block";
  paragraphe2.innerHTML =
    "CQ, CQ, CQ DX.... <br> CQ veut dire un appel général à toutes stations (provient de l'anglais Seek You --> je vous recherche), la mention DX spécifie des stations longues distances. <br> J'ai eu la chance de lancer des appels sur les ondes longues distances (communications radio) à la fin des années 90 et jusqu'au milieu des années 2000, établissant de très beaux contacts humains avec les quatre coins du monde. Un très bon moyen de développer son anglais! <br> <p>Depuis l'arrivée d'internet, c'est au travers des médias comme Facebook, Mixcloud, Discord, Twitch…. que je communique.</p>";
  paragraphe2.style.display = "block";
  subtitle3.innerHTML = "MUSIC SURF";
  subtitle3.style.display = "block";
  paragraphe3.innerHTML =
    "Le Djing étant l'une de mes passions, je ne peux rester sans découvrir de nouveaux artistes ou re découvrir les standards qui ont fait danser des générations entières. <br> Je passe donc souvent du temps à rechercher les pépites à venir, notamment en ce qui concerne la musique électronique qui reste mon style favori. <br> Comme chez un disquaire, je navigue sur les sites web de musique à la recherche des hits à venir, des nouveaux talents de la scène électro et l'inspiration pour mes futurs mixes.";
  paragraphe3.style.display = "block";
  subtitle4.style.display = "none";
  subtitle4.innerHTML = "";
  paragraphe4.style.display = "none";
  paragraphe4.innerHTML = "";
  subtitle5.style.display = "none";
  subtitle5.innerHTML = "";
  paragraphe5.style.display = "none";
  paragraphe5.innerHTML = "";
  subtitle6.style.display = "none";
  subtitle6.innerHTML = "";
  paragraphe6.style.display = "none";
  paragraphe6.innerHTML = "";
}

function contactContent() {
  photo.src = "img/cellphone2.jpg";
  document.getElementById("section-title").innerHTML = "CONTACT";
  subtitle1.style.display = "block";
  subtitle1.innerHTML =
    '<a href="mailto:emmanueldevfr@gmail.com"><img class="socialIcons" src="img/gmail.png"></a>';
  paragraphe1.style.display = "none";
  paragraphe1.innerHTML = "";
  subtitle2.style.display = "block";
  subtitle2.innerHTML =
    '<a href="https://www.facebook.com/emmanuel.durouge/" target="_blank"><img class="socialIcons" src="img/facebook2.png"></a>';
  paragraphe2.style.display = "none";
  paragraphe2.innerHTML = "";
  subtitle3.style.display = "none";
  subtitle3.innerHTML = "";
  paragraphe3.style.display = "none";
  paragraphe3.innerHTML = "";
  subtitle4.style.display = "none";
  subtitle4.innerHTML = "";
  paragraphe4.style.display = "none";
  paragraphe4.innerHTML = "";
  subtitle5.style.display = "none";
  subtitle5.innerHTML = "";
  paragraphe5.style.display = "none";
  paragraphe5.innerHTML = "";
  subtitle6.style.display = "none";
  subtitle6.innerHTML = "";
  paragraphe6.style.display = "none";
  paragraphe6.innerHTML = "";
}

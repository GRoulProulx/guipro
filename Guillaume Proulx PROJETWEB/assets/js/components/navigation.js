// ====== Le Tableau ==========
const liensNav = [
  {
    url: "index.html",
    texte: "Accueil",
  },
  {
    url: "formulaire.html",
    texte: "Achat",
  },
  {
    url: "a-propos.html",
    texte: "Nos Affiches",
  },
];

// ===== Les variables =====
const navAccueil = document.querySelector(".nav_bar");
const jourNuit = document.querySelector(".mode-nightday");


// ====== Les Fonctions =========
export function init() {
  afficheNavBar(liensNav);

  jourNuit.addEventListener("click", btnJourNuit);

  let theme = localStorage.getItem("theme");
  document.body.dataset.theme = theme || "jour";
}

// Fonction pour l'indication de la page courrante


export function verificationPageActive(urlVerification) {
  const url = document.documentURI;
  let arrayUrl = url.split("/");
  let pageCourrante = arrayUrl.pop();

  if (pageCourrante === "") {
    pageCourrante = "index.html";
  }
  return urlVerification === pageCourrante;
}


// L'affichage des liens de la navigation

function afficheNavBar(navigation) {
  viderNav();

  navigation.forEach(function (nav_bar) {
    let gabarit = `<nav class="nav_bar">
        <a href="${nav_bar.url}">${nav_bar.texte}</a>
        </nav>`;

    navAccueil.insertAdjacentHTML("beforeend", gabarit);
    const ajoutLiens = navAccueil.lastElementChild;
    const pageActive = verificationPageActive(nav_bar.url);
    if (pageActive) {
      ajoutLiens.classList.add("anim-nav");
    } else {
      ajoutLiens.classList.remove= ("anim-nav");
    }
  });
  
}

// Fonctions pour les themes jour/nuit

function btnJourNuit(evenement) {
  let target = evenement.target;
  let btn = target.closest("[data-mode]");

  if (btn !== null) {
    document.body.dataset.theme = btn.dataset.mode;
    localStorage.setItem("theme", btn.dataset.mode);
  }
}

// Vider la navigation

function viderNav() {
  navAccueil.innerHTML = "";
}

// ÉXECUTION
init();

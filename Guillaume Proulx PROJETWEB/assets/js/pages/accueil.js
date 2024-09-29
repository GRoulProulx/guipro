// Les Objets ==== Les cartes
const cartes = [
    {
        id: 1,
        nom: "Buried Alive",
        couleur: "noir",
        prix: 27,
        enStock: true,
    },
    {
        id: 2,
        nom: "Solitude",
        couleur: "blanc",
        prix: 5,
        enStock: false,
    },
    {
        id: 3,
        nom: "Murktide_regent",
        couleur: "bleu",
        prix: 7,
        enStock: true,
    },
    {
        id: 4,
        nom: "Goldspan Dragon",
        couleur: "rouge",
        prix: 14,
        enStock: true,
    },
    {
        id: 5,
        nom: "Black Lotus",
        couleur: "artifact",
        prix: 10000,
        enStock: true,
    },
    {
        id: 6,
        nom: "Unholy heat",
        couleur: "blanc",
        prix: 10,
        enStock: true,
    },
    
];
console.log(cartes);
// Le chemin des images.
const chemin = ["assets", "img", "cartes"];



// Les variables
const listeCartesHTML = document.querySelector(".liste-cartes");
//const nomEtPrix = document.querySelector(".details");
//const boutonPrix = document.querySelector(".filtre-prix");
//const boutonCouleurs = document.querySelector(".filtre-couleurs");
//const boutonDispo = document.querySelector(".filtre-dispo");




// Les Fonctions
function init() {
    
    cartes.forEach(function(cartes, index) {
        let cartesHTML = affichageCartes(cartes);
        
    });
}

function creationChemin(tableauChemin) {
    let chemin = "";
    chemin = `${tableauChemin.join("/")}/`;

    return chemin;
  
}

function ajoutCartes(nomCartes) {
    let base = creationChemin(cartes);
    let carteClean = nomCartes.trim().toLowerCase().replaceAll(" ", "_");
    //console.log(carteClean); 
    let imageSource = `${base}${carteClean}.png`;
    return imageSource;
}

function affichageCartes(carte) {
    let imageSource = ajoutCartes(carte.nom);
    let template = `
        <div class="carte">
            <img src="${carte.imageSource}" alt="" />
            <p>${carte.nom}</p>
        </div>`;
    listeCartesHTML.insertAdjacentHTML("beforeend", template);
    let element = listeCartesHTML.lastElementChild;
    element.addEventListener("click", affichageCartes)
}


// L'affichage des petites cartes.

function affichageCartes(nomCarte) {
    //viderCartes();

    let cartes = ajoutCartes(nomCarte)
    //console.log(cartes);
    cartes.forEach(function (carte) {
        let template = `
            <div class="carte">
                <img src="${carte.imageSource}" alt="" />
                <p>${carte.nomCarte}</p>
            </div>`;
        listeCartesHTML.insertAdjacentHTML("beforeend", template);
    });
    
        listeCartesHTML.insertAdjacentHTML("beforeend", template)
        let elementPrix = listeCartesHTML.lastElementChild;
        //console.dir(listeCartesHTMl);

        elementPrix.addEventListener("click", function (){

    }); 
}

function viderCartes() {
    listeCartesHTML.innerHTML = "";
}


// L'affichage du prix des cartes.

    
/*
function affichageDetails(nom, prix) {
    nomEtPrix.textContent = nom.prix, prix.nom
}

// La fonction qui appelle tous les filtres. Selon ce que l'utilisateur choisi comme filtre, il sera appliqué. 
function filtres(tableauFiltres) {
    let copieFiltres = [...tableauFiltres]
    

}

// Le filtre de la disponibilités des cartes.
function filtreDispo(disponibleCarte) {
    
}


// Le filtre des différents prix.
function filtrePrix(prixCarte) {
    
}


// Le filtre des différentes couleurs.
function filtreCouleur() {
    
}       */




// ÉXECUTIONS

init();
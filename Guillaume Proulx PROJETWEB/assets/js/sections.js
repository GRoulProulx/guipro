// Variables
let sectionPresente = 0;


// Élements HTMl
/*  const formulaires = document.querySelector(".form-principal");
const sectionClient = document.querySelector(".info-client");
const sectionLivraison = document.querySelector(".info-livraison");
const sectionResume = document.querySelector(".info-resume");
  */
const totalSections = formulaires.querySelectorAll("section");
const btnContinuer = formulaires.querySelectorAll("[data-direction='1']");
const btnReculer = formulaires.querySelectorAll("[data-direction='-1']");


//Fonctions
export function init() {
    

    btnContinuer.forEach(function(btn){
        btn.addEventListener("click", prochaineSection);
        cacherSections();
    affichageSections(); 
    }); 

    btnReculer.forEach(function(btn){
        btn.addEventListener("click", precedenteSection);
        
    }); 
   
}


// Fonctions pour cacher et naviguer les différentes sections du formulaire 


function affichageSections() {
    cacherSections();
    totalSections[sectionPresente].classList.remove("invisible");
}


function cacherSections() {
   totalSections.forEach(function(element) {
        element.classList.add("invisible");
   });
}

// Fonction pour passer d'une section à une autre

function prochaineSection() {
    sectionPresente++;

    if (sectionPresente < totalSections.length) {
        affichageSections();
    }
}

function precedenteSection() {
    sectionPresente--;

    if (sectionPresente >= 0) {
        affichageSections();
    }
}




// Éxecution
init();
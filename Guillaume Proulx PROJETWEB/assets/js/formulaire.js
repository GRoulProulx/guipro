// Variables

let formulaireValide = false;



// Élements HTML

const formulaires = document.querySelector(".form-principal");
const sectionClient = document.querySelector(".info-client");
const sectionLivraison = document.querySelector(".info-livraison");
const sectionResume = document.querySelector(".info-resume");
const checkbox = document.querySelector(".checkbox");
const selectSuccursale = document.querySelector("select");
//const textRouge = document.querySelectorAll(".oubligatoire")
/* const buttons = document.querySelectorAll("button") */
/* const totalSections = formulaires.querySelectorAll("section"); */
/* const btnContinuer = formulaires.querySelectorAll("[data-direction='1']");
const btnReculer = formulaires.querySelectorAll("[data-direction='-1']"); */






//  Pour la validation eventuelle du formulaire 

const champsFormulaire = document.querySelectorAll("input, select, textarea");









// Fonctions

function init() {
    selectSuccursale.disabled = true;

    formulaires.addEventListener("submit", empecheSubmit);
    champsFormulaire.forEach(function(champFormulaire) {
        champFormulaire.addEventListener("change", changementDeChamps);
    });

    if (checkbox && selectSuccursale) { 
        checkbox.addEventListener("change", function() {
            selectSuccursale.disabled = !checkbox.checked;
            });
    }
    
}


// Fonction qui empêche le clic du button submit 
// Fonctions pour activé/désactivé les boutons continuer


function empecheSubmit(evenement) {
    evenement.preventDefault();
    
    
    formulaireValide = formulaires.checkValidity(); 
   
    if (formulaireValide) {
        formulaires.submit();
    }
}
 
// Fonctions au changement des champs du formulaire et validations


function changementDeChamps(evenement) {
    const declencheur = evenement.currentTarget;
    const name = declencheur.name;
    const value = declencheur.value;
    const type = declencheur.type;
    
    
    if (type == "email") {
        if (value.endsWith("@gmail.com") == false) {
            declencheur.setCustomValidity("le champ doit contenir @gmail.com");
        }else {
            declencheur.setCustomValidity("");
        }   
    }
    const cValide = declencheur.checkValidity();
    
    

    const sectionParent = declencheur.closest("section");
    const champsSection = sectionParent.querySelectorAll("[name]");
    const tableauValidation = [];

    
    

    champsSection.forEach(function (champ) {
        const estValide = champ.checkValidity();
        tableauValidation.push(estValide);
    });

    
    const sectionInvalide = tableauValidation.includes(false);
    
    
    if (sectionInvalide == true) {
        
        sectionParent.querySelector(".bouton[data-direction='1']").classList.add("disabled");
    }
    else {
        sectionParent.querySelector(".bouton[data-direction='1']").classList.remove("disabled");
    }

  
    afficherResume(name, value);
}


/*   NE FONCTIONNE PAS =============
    if (cValide) {
        console.log("ok");

        const sectionParent = declencheur.closest("section");
        const champsSection = sectionParent.querySelectorAll("[name]");
        const tableauValidation = [];
        
        
        champsSection.forEach(function (champ) {
            const estValide = champ.checkValidity();
            tableauValidation.push(estValide);
        });
        //console.log(tableauValidation);
        const sectionInvalide = tableauValidation.includes(false);
        if (sectionInvalide == true) {
            sectionParent.querySelector(".bouton[data-direction='1']").classList.add("disabled");
        }
    
    } */




// Fonction pour afficher les détails du résumé


function afficherResume(nomChamp, valeur) {
    const resume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    
    if (resume !== null) {
        resume.textContent = valeur;
    } 
}



// Fonction pour prévenir d'envoyer le formulaire sans avoir remplis tous les champs

/* function validerSections(buttons) {
    isValid = false;
    buttons.forEach(function(button){
       let isValid = formulaires.checkValidity();
        
        if (isValid == false) {
            button.classList.add("disable");
        }
        else {
            button.classList.remove("disabled");
        }
    });
    return isValid;
}
 */


/*  function validerSections(tousValide) {
    let champsValide = formulaires.querySelectorAll("button");
    tousValide = false;
    champsValide.forEach(function(champValide) {
        if (!champValide.checkValidity()) {
            champValide.classList.add("disabled");
             
        }
        else  {
            tousValide = true; 
            champValide.classList.remove("disabled");
            
        }
    });
    return tousValide;
} */

// Éxecutions
init();


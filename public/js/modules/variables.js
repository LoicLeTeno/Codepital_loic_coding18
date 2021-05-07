// OBJECT : personne
    // export
export {docteur};

let docteur = {
    nom : "Arouk",
    argent : 50,
    cabinet : [],

    diagnostique(personne) {
        if (personne.maladie == "unsave") {
            personne.traitement = traite_saveOn.traitement;

        } else if (personne.maladie == "404") {
            personne.traitement = traite_chackLink.traitement;
            
        } else if (personne.maladie == "azmatique") {
            personne.traitement = traite_ventoline.traitement;

        } else if (personne.maladie == "syntaxError") {
            personne.traitement = traite_f12.traitement;

        } else if (personne.maladie == "mal indenté") {
            personne.traitement = traite_ctrl.traitement;
        }
    },

    patientIn(personne) {
        this.cabinet.push(personne);
    },

    patientOut() {
        this.cabinet.pop()
    }
}


// VARIABLES : personnes
    // import
import {Personnes} from './class.js';
    // export
export {optimus, sangoku, darthVader, semicolon};

let optimus = new Personnes("Optimus", "unsave", 200, [], "malade", "");
let sangoku = new Personnes("Sangoku", "404", 80, [], "malade", "");
let darthVader = new Personnes("Darth Vader", "azmatique", 110, [], "malade", "");
let semicolon = new Personnes("semi-Colon", "syntax Error", 60, [], "malade", "");


// OBJECT : lieux
    // export
export {salleAttente, maison, pharmacie, cimetiere};

let salleAttente = {
    nom : "salle d'attente",

    personne : [optimus, sangoku, darthVader, semicolon]
}

let pharmacie = {
    nom : "pharmacie",

    contenue : [],
    personnes : []
}

let maison = {
    nom : "chez eux",

    personnes : []
}

let cimetiere = {
    nom : "cimetière",

    personnes : []
}


// VARIABLES : produits
    // import
import {Produits} from './class.js';
    // export
export {traite_ctrl, traite_saveOn, traite_chackLink, traite_ventoline,traite_f12};

let traite_ctrl = new Produits("ctrl+maj+f", "à pris", 60);
let traite_saveOn = new Produits("saveOnFocusChange", "à pris", 100);
let traite_chackLink = new Produits("CheckLinkRelation", "à pris", 35);
let traite_ventoline = new Produits("Ventoline", "à pris", 40);
let traite_f12 = new Produits("f12+doc", "à pris", 20);

pharmacie.contenue = [traite_ctrl, traite_saveOn, traite_chackLink, traite_ventoline,traite_f12];
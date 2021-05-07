// OBJECT : personne
    // export
export {docteur};

let docteur = {
    nom : "Arouk",
    argent : 50,
    cabinet : [],

    diagnostique() {},

    patientIn() {},

    patientOut() {}
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

    personne : []
}

let pharmacie = {
    nom : "pharmacie",

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
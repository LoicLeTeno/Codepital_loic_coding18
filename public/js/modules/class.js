// IMPORT
import * as lesVariables from './variables.js'; 
// CLASS : personnes
export class Personnes {
    constructor(nom, maladie, argent, poche, etatSante, traitement) {
        this.nom = nom,
        this.maladie = maladie,
        this.argent = argent,
        this.poche = poche,
        this.etatSante = etatSante,
        this.traitement = traitement,


        this.goTo = (lesVariablesLieu) => {

        },
        
        this.takeCare = () => {
            this.traitement = this.poche[0].traitement;
            this.maladie = "";
            this.etatSante = "Bonne santé";

            this.poche.pop();
        },

        this.paye = (lesVariablesE) => {
            if (lesVariablesE == lesVariables.docteur) {
                this.argent = this.argent - 50;

            } else {
                if (this.argent > lesVariablesE.prix) {
                    console.log(`Cheh t'aura rien ${this.nom}`);

                    this.etatSante = "Dead";
                    lesVariables.cimetiere.personnes.push(this)
                } else {
                    this.argent = this.argent - lesVariablesE.prix;
                    this.poche.push(lesVariablesE);
                }
            }
        }
    }
}


// CLASS : produits 
export class Produits {
    constructor(nom, traitement, prix) {
        this.nom = nom,
        this.traitement = traitement,

        this.prix = prix
    }
}
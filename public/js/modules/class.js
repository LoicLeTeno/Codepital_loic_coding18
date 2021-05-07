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


        this.goTo = (lesVariablesDepartLieu, lesVariablesArriverLieu,) => {
            lesVariablesArriverLieu.personnes.push(this);
            lesVariablesDepartLieu.personnes.pop();
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
                lesVariables.docteur.argent = lesVariables.docteur.argent + 50;

            } else {
                if (this.argent < lesVariablesE.prix) {
                    console.log(`Cheh t'aura rien ${this.nom}`);

                    this.etatSante = "Dead";

                    lesVariables.cimetiere.personnes.push(this);
                    lesVariables.pharmacie.personnes.pop();
                } else {
                    this.argent = this.argent - lesVariablesE.prix;
                    this.poche.push(lesVariablesE);

                    console.log(`${this.nom} achète avec succès son traitement : ${this.poche[0].nom}`);
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
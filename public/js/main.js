// IMPORT
import * as lesVariables from './modules/variables.js'; 

// DÉBUT DES OPÉRATIONS
    // ## OPTIMUS
// optimus rentre dans cabinet
lesVariables.docteur.patientIn(lesVariables.optimus);
console.log(lesVariables.salleAttente.personnes);
console.log(lesVariables.docteur.cabinet);

console.log(`${lesVariables.optimus.nom} rentre dans le cabinet du Dr.${lesVariables.docteur.nom}`);

// docteur diagnostique optimus
lesVariables.docteur.diagnostique(lesVariables.optimus)
console.log(lesVariables.optimus.traitement);

console.log(`Dr.${lesVariables.docteur.nom} donne son diagnostique à ${lesVariables.optimus.nom}, il doit prendre du (${lesVariables.optimus.traitement}) pour sa (${lesVariables.optimus.maladie})`);

// optimus paye le doc
lesVariables.optimus.paye(lesVariables.docteur)
console.log(lesVariables.optimus.argent);
console.log(lesVariables.docteur.argent);

console.log(`${lesVariables.optimus.nom} paye le Dr.${lesVariables.docteur.nom} : 50€`);

// optimus sort
lesVariables.docteur.patientOut(lesVariables.optimus);
console.log(lesVariables.docteur.cabinet);

console.log(lesVariables.salleAttente.personnes);

console.log(`Dr.${lesVariables.docteur.nom} fait sortir ${lesVariables.optimus.nom}`);

// optimus va  la pharmacie
lesVariables.optimus.goTo(lesVariables.salleAttente, lesVariables.pharmacie);
console.log(lesVariables.salleAttente, lesVariables.pharmacie);

console.log(`${lesVariables.optimus.nom} va à la ${lesVariables.pharmacie.nom}`);

// optimus veut acheter son traitement
lesVariables.optimus.paye(lesVariables.traite_saveOn);
console.log(lesVariables.optimus.poche, `son argent : ${lesVariables.optimus.argent}€`);

// optimus prend son traitement
lesVariables.optimus.takeCare();
console.log(lesVariables.optimus);

console.log(`${lesVariables.optimus.nom} à pris son traitement il est en ${lesVariables.optimus.etatSante}`);

// optimus rentre chez lui
lesVariables.optimus.goTo(lesVariables.pharmacie, lesVariables.maison);
console.log(lesVariables.maison.personnes);

console.log(`${lesVariables.optimus.nom} est rentrer chez lui`);


console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");


    // ## SANGOKU
// sangoku rentre dans cabinet
lesVariables.docteur.patientIn(lesVariables.sangoku);
console.log(lesVariables.salleAttente.personnes);
console.log(lesVariables.docteur.cabinet);

console.log(`${lesVariables.sangoku.nom} rentre dans le cabinet du Dr.${lesVariables.docteur.nom}`);

// docteur diagnostique sangoku
lesVariables.docteur.diagnostique(lesVariables.sangoku)
console.log(lesVariables.sangoku.traitement);

console.log(`Dr.${lesVariables.docteur.nom} donne son diagnostique à ${lesVariables.sangoku.nom}, il doit prendre du (${lesVariables.sangoku.traitement}) pour sa (${lesVariables.sangoku.maladie})`);

// sangoku paye le doc
lesVariables.sangoku.paye(lesVariables.docteur)
console.log(lesVariables.sangoku.argent);
console.log(lesVariables.docteur.argent);

console.log(`${lesVariables.sangoku.nom} paye le Dr.${lesVariables.docteur.nom} : 50€`);

// sangoku sort
lesVariables.docteur.patientOut(lesVariables.sangoku);
console.log(lesVariables.docteur.cabinet);

console.log(lesVariables.salleAttente.personnes);

console.log(`Dr.${lesVariables.docteur.nom} fait sortir ${lesVariables.optimus.nom}`);

// sangoku va  la pharmacie
lesVariables.sangoku.goTo(lesVariables.salleAttente, lesVariables.pharmacie);
console.log(lesVariables.salleAttente, lesVariables.pharmacie);

console.log(`${lesVariables.sangoku.nom} va à la ${lesVariables.pharmacie.nom}`);

// sangoku veut acheter son traitement
lesVariables.sangoku.paye(lesVariables.traite_chackLink);
console.log(lesVariables.sangoku.poche, `son argent : ${lesVariables.sangoku.argent}€`);

// sangoku est mort direct cimetière
console.log(lesVariables.cimetiere.personnes);
console.log(`${lesVariables.sangoku.nom} est ${lesVariables.sangoku.etatSante} il est au ${lesVariables.cimetiere.nom}`);


console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");


    // ## DART VADER
// darthVader rentre dans cabinet
lesVariables.docteur.patientIn(lesVariables.darthVader);
console.log(lesVariables.salleAttente.personnes);
console.log(lesVariables.docteur.cabinet);

console.log(`${lesVariables.darthVader.nom} rentre dans le cabinet du Dr.${lesVariables.docteur.nom}`);

// docteur diagnostique darthVader
lesVariables.docteur.diagnostique(lesVariables.darthVader)
console.log(lesVariables.optimus.traitement);

console.log(`Dr.${lesVariables.docteur.nom} donne son diagnostique à ${lesVariables.darthVader.nom}, il doit prendre du (${lesVariables.darthVader.traitement}) pour sa (${lesVariables.darthVader.maladie})`);

// darthVader paye le doc
lesVariables.darthVader.paye(lesVariables.docteur)
console.log(lesVariables.darthVader.argent);
console.log(lesVariables.docteur.argent);

console.log(`${lesVariables.darthVader.nom} paye le Dr.${lesVariables.docteur.nom} : 50€`);

// darthVader sort
lesVariables.docteur.patientOut(lesVariables.darthVader);
console.log(lesVariables.docteur.cabinet);

console.log(lesVariables.salleAttente.personnes);

console.log(`Dr.${lesVariables.docteur.nom} fait sortir ${lesVariables.darthVader.nom}`);

// darthVader va  la pharmacie
lesVariables.darthVader.goTo(lesVariables.salleAttente, lesVariables.pharmacie);
console.log(lesVariables.salleAttente, lesVariables.pharmacie);

console.log(`${lesVariables.darthVader.nom} va à la ${lesVariables.pharmacie.nom}`);

// darthVader veut acheter son traitement
lesVariables.darthVader.paye(lesVariables.traite_ventoline);
console.log(lesVariables.darthVader.poche, `son argent : ${lesVariables.darthVader.argent}€`);

// darthVader prend son traitement
lesVariables.darthVader.takeCare();
console.log(lesVariables.darthVader);

console.log(`${lesVariables.darthVader.nom} à pris son traitement il est en ${lesVariables.darthVader.etatSante}`);

// darthVader rentre chez lui
lesVariables.darthVader.goTo(lesVariables.pharmacie, lesVariables.maison);
console.log(lesVariables.maison.personnes);

console.log(`${lesVariables.darthVader.nom} est rentrer chez lui`);


console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");


    // SEMI-COLON
// semicolon rentre dans cabinet
lesVariables.docteur.patientIn(lesVariables.semicolon);
console.log(lesVariables.salleAttente.personnes);
console.log(lesVariables.docteur.cabinet);

console.log(`${lesVariables.semicolon.nom} rentre dans le cabinet du Dr.${lesVariables.docteur.nom}`);

// docteur diagnostique semicolon
lesVariables.docteur.diagnostique(lesVariables.semicolon)
console.log(lesVariables.semicolon.traitement);

console.log(`Dr.${lesVariables.docteur.nom} donne son diagnostique à ${lesVariables.semicolon.nom}, il doit prendre du (${lesVariables.semicolon.traitement}) pour sa (${lesVariables.semicolon.maladie})`);

// semicolon paye le doc
lesVariables.semicolon.paye(lesVariables.docteur)
console.log(lesVariables.semicolon.argent);
console.log(lesVariables.docteur.argent);

console.log(`${lesVariables.semicolon.nom} paye le Dr.${lesVariables.docteur.nom} : 50€`);

// semicolon sort
lesVariables.docteur.patientOut(lesVariables.semicolon);
console.log(lesVariables.docteur.cabinet);

console.log(lesVariables.salleAttente.personnes);

console.log(`Dr.${lesVariables.docteur.nom} fait sortir ${lesVariables.optimus.nom}`);

// semicolon va  la pharmacie
lesVariables.semicolon.goTo(lesVariables.salleAttente, lesVariables.pharmacie);
console.log(lesVariables.salleAttente, lesVariables.pharmacie);

console.log(`${lesVariables.semicolon.nom} va à la ${lesVariables.pharmacie.nom}`);

// semicolon veut acheter son traitement
lesVariables.semicolon.paye(lesVariables.traite_f12);
console.log(lesVariables.semicolon.poche, `son argent : ${lesVariables.semicolon.argent}€`);

// semicolon est mort direct cimetière
console.log(lesVariables.cimetiere.personnes);
console.log(`${lesVariables.semicolon.nom} est ${lesVariables.semicolon.etatSante} il est au ${lesVariables.cimetiere.nom}`);


console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------");


console.log("Log de fin");
console.log(lesVariables.sangoku, lesVariables.semicolon, lesVariables.darthVader, lesVariables.optimus, lesVariables.docteur);
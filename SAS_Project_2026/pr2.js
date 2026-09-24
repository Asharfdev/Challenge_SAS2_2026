
const trains = [
    {
        id: 1,
        ville_de_depart: "Safi",
        ville_de_destination: "Youssoufia",
        depart: "07:30",
        arrivage: "08:30",
        prix: "25",
        places_disponibles: "50"
    },
    {
        id: 2,
        ville_de_depart: "Marrakech",
        ville_de_destination: "Youssoufia",
        depart: "07:30",
        arrivage: "08:30",
        prix: "50",
        places_disponibles: "50"
    }
];

const read = require("prompt-sync")();

console.log("=========== Trains' list ============");
console.log("1. Afficher la liste des trains");
console.log("2. Choisir votre ville de départ");
console.log("0. Quitter");

let choix = read("choix : ");

switch (choix) {

    case "1":
        

        for (let i = 0; i < trains.length; i++) {
            affichageTrain(trains[i]);
        }

        break;

    case "2":

        let ville = read("Entrer votre ville de départ : ");

        for (let i = 0; i < trains.length; i++) {

            if (trains[i].ville_de_depart.toLowerCase() === ville.toLowerCase()) {

                affichageTrain(trains[i]);

                trouve = true;
            }
        }

        if (trouve === false) {
            console.log("Ville n'existe pas");
        }

        break;

    case "0":

        console.log("Au revoir !");

        break;

    default:

        console.log("Choix invalide");

        break;
}


function affichageTrain(train) {

    console.log("Id : " + train.id);
    console.log("Ville de départ : " + train.ville_de_depart);
    console.log("Ville de destination : " + train.ville_de_destination);
    console.log("Départ : " + train.depart);
    console.log("Arrivée : " + train.arrivage);
    console.log("Prix : " + train.prix);
    console.log("Places disponibles : " + train.places_disponibles);

    console.log("\n");
}
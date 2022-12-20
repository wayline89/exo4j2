// *** Exo 1 Switch ***
//     -  Stockez dans une variable, via un prompt, un jour de la semaine.

let day;

day = prompt("Veuillez entrer un jour de la semaine :");

console.log(day);


//     -  À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 

//         - Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.

switch (day) {
    case "lundi":
      console.log("Tu as cours à MolenGeek et tu as sport en soirée.");
      break;

    default:
      console.log("Je ne connais pas ce jour de la semaine.");
  }


//  *** Exo 2 Switch ***
//     - Déclarer une variable qui prendra comme valeur un type de météo

let météo;

météo = prompt("type de météo");

console.log(météo);




//     - À l'aide d'un switch, affichez une réaction appropriée au temps

switch (météo) {
    case "orageux":
      console.log("parapluie");
      break;

      case "soleil":
        console.log("coup de soleil");
        break;

    default:
      console.log("Je ne connais pas cette météo");
  }


// *** Exo 3 Switch ***
//     - Déclarez une variable dont la valeur sera donnée par l'utilisateur.

let random;

random = prompt("Enter a number");

switch(true) {
  case random % 2 === 0:
    console.log("multiple de deux");
    break;
  case isNaN(random):
    console.log("pas un chiffre");
    break;
  default:
    console.log("pas multiple de deux");
}

// *** Exo 4 Switch ***
//     -  Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;

//     -   Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

//         -  Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4

let nmb1;
let operateur;
let nmb2;

nmb1 = +prompt("num 1");

operateur = prompt("Enter operateur");

nmb2= +prompt("num 2");

switch (operateur) {
    case "+":
      console.log(nmb1 + nmb2);
      break;
    case "-":
      console.log(nmb1 - nmb2);
      break;
    case "*":
      console.log(nmb1 * nmb2);
      break;
    case "/":
      console.log(nmb1 / nmb2);
      break;
    default:
      console.log("Opérateur non valide");
  }


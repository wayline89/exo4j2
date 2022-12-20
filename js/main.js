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

//   Voici quelques exemples d'exercices sur les switchs en JavaScript :

// 1. Écrivez un programme qui demande à l'utilisateur de saisir un chiffre de 1 à 7 et affiche le jour de la semaine correspondant (par exemple, 1 pour lundi, 2 pour mardi, etc.). Utilisez un switch pour résoudre ce problème.

let num;
num = +prompt("Enter num");

switch (num) {
  case 1:
    console.log("lundi");
    break;
  case 2:
    console.log("mardi");
    break;
  case 3:
    console.log("mercredi");
    break;
  case 4:
    console.log("jeudi");
    break;
  case 5:
    console.log("vendredi");
    break;
  case 6:
    console.log("samedi");
    break;
  case 7:
    console.log("dimanche");
    break;
  default:
    console.log("oops");
}

// 2. Écrivez un programme qui demande à l'utilisateur de saisir un chiffre de 1 à 12 et affiche le mois de l'année correspondant (par exemple, 1 pour janvier, 2 pour février, etc.). Utilisez un switch pour résoudre ce problème.

let mois;
mois = +prompt("Enter num");

switch (mois) {
  case 1:
    console.log("janvier");
    break;
  case 2:
    console.log("fevrier");
    break;
  case 3:
    console.log("mars");
    break;
  case 4:
    console.log("avril");
    break;
  case 5:
    console.log("mai");
    break;
  case 6:
    console.log("juin");
    break;
  case 7:
    console.log("juillet");
  case 8:
    console.log("aout");
    break;
  case 9:
    console.log("septembre");
    break;
  case 10:
    console.log("octobre");
    break;
  case 11:
    console.log("novembre");
    break;
  case 12:
    console.log("decembre");
    break;
  default:
    console.log("oops");
}

// 3. Écrivez un programme qui demande à l'utilisateur de saisir une note de 0 à 100 et affiche la lettre de grade correspondante (par exemple, A pour une note supérieure ou égale à 90, B pour une note supérieure ou égale à 80, etc.). Utilisez un switch pour résoudre ce problème.

let note = +prompt("Enter note");

switch (true) {
  case note >= 90:
    console.log("A");
    break;
  case note >= 80:
    console.log("B");
    break;
  case note >= 70:
    console.log("C");
    break;
  case note >= 60:
    console.log("D");
    break;
  case note >= 50:
    console.log("E");
    break;
  case note >= 40:
    console.log("F");
    break;
  default:
    console.log("note must be between 0 and 100");
}

// 4. Écrivez un programme qui demande à l'utilisateur de saisir un caractère et affiche s'il s'agit d'une voyelle ou d'une consonne. Utilisez un switch pour résoudre ce problème.
let lettre = window.prompt("Enter lettre");

switch (lettre) {
  case 'a':
    console.log("voyelle");
    break;
  case 'e':
    console.log("voyelle");
    break;
  case 'i':
    console.log("voyelle");
    break;
  case 'o':
    console.log("voyelle");
    break;
  case 'u':
    console.log("voyelle");
    break;
  case 'y':
    console.log("voyelle");
    break;
  default:
    console.log("consonne");
}

// 5. Écrivez un programme qui demande à l'utilisateur de saisir un nombre entier et affiche s'il est positif, négatif ou nul. Utilisez un switch pour résoudre ce problème.

let n;

n = +prompt("num");

switch (true) {
    case n > 0:
        console.log("positif");
        break;
    case n < 0:
        console.log("négatif");
        break;
    case n == 0:
        console.log("nul");
        break;
    default:
        console.log("test");
}

// 6. Écrivez un programme qui demande à l'utilisateur de saisir un caractère et affiche s'il est une majuscule, une minuscule ou un autre caractère. Utilisez un switch pour résoudre ce problème.




let userInput = prompt("Veuillez saisir un caractère :");
let firstChar = userInput.charAt(0);

let isLowerCase = firstChar !== firstChar.toUpperCase();

let isUpperCase = firstChar !== firstChar.toLowerCase();

switch (true) {
  case isLowerCase:
    console.log("Le caractère est une minuscule.");
    break;
  case isUpperCase:
    console.log("Le caractère est une majuscule.");
    break;
  default:
    console.log("pas un caractère");
}




// 7. Écrivez un programme qui demande à l'utilisateur de saisir un mot et affiche s'il est un palindrome (un mot qui se lit de la même manière dans les deux sens, comme "radar" ou "level"). Utilisez un switch pour résoudre ce problème.

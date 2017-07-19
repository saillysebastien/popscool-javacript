"use strict";

// var stock = 100;

//afficher dans la console :
// - "stock indisponible" si est le à 0
// - "stock en faible quantité" si le stock est plus petit que 50
// - "stock disponible" si le stock est plus grand ou egal à 50
var stock = function() {
  var valeur = document.getElementById('input').value;
  if (valeur == 0) {
    console.log("stock indisponible");
  } else if (valeur < 50) {
    console.log("stock en faible quantité");
  } else {
    console.log("stock disponible");
  }
}

// exo 1 bis :

var hasValidAdress = true;
var hasValidatedAgreement = true;

//Affiche dans la console
// - "commande en cours" si hasValidAdress et hasValidatedAgreement sont vrais
// - "vous devez renseigner une adresse" si hasValidAdress est faux
// - "vous devez cocher la case condition  de vente" si hasValidatedAgreement est faux
// - "vous devez renseigner une adresse et vous devez cocher la condition de vente" si hasValidAdress et hasValidatedAgreement sont fausses

if (hasValidAdress == false && hasValidatedAgreement == true) {
  console.log("Vous devez renseigner l'adresse");
} else if (hasValidatedAgreement == false && hasValidAdress == true) {
  console.log("Vous devez cocher la case condition  de vente");
} else if (hasValidAdress == false && hasValidatedAgreement == false) {
  console.log("Vous devez renseigner une adresse et vous devez cocher la condition de vente");
} else {
  console.log("Commande en cours");
}


if (hasValidAdress && hasValidatedAgreement) {
  console.log("commande en cours");
} else if (!hasValidAdress && hasValidatedAgreement) {
  console.log("Vous devez renseigner une adresse");
} else if (hasValidAdress && !hasValidatedAgreement) {
  console.log("Vous devez cocher la case Condition de vente");
} else if (!hasValidAdress && !hasValidatedAgreement) {
  console.log("Vous devez renseigner une adresse et vous devez cocher la condition de vente");
}


// Exo 2
// mini exo checklist

function go() {
  var gas = document.getElementById("gas").checked;
  var electric = document.getElementById("electric").checked;
  var windows = document.getElementById("windows").checked;
  var key = document.getElementById("key").checked;
  if (gas && electric && windows && key) {
    swal("Vous avez tout fait",
      "Tu peux partir l\'esprit tranquille",
      "success");
  } else if (!gas && electric && windows && key) {
    swal("Vous ne pouvez pas partir",
      "Le gaz n\'est pas fermé",
      "error");
  } else if (gas && electric && !windows && key) {
    swal("Vous ne pouvez pas partir",
      "Les fenêtres ne sont pas fermées",
      "error");
  } else if (gas && !electric && windows && key) {
    swal('Vous ne pouvez pas partir',
      "L'électricité n'est pas fermé",
      "error");
  } else if (gas && electric && windows && !key) {
    swal("Vous ne pouvez pas partir",
      "Vous n'avez pas vos clefs",
      "error");
  } else if (!gas && !electric && windows && key) {
    swal("Vous ne pouvez pas partir",
      "L'électricité et le gaz n'est pas coupé",
      "error");
  } else if (!gas && electric && !windows && key) {
    swal("Le gaz et les fenêtres ne sont pas fermés");
  } else if (!gas && electric && windows && !key) {
    swal("Le gaz n'est pas fermé et vous n'avez pas vos clefs");
  } else if (gas && !electric && !windows && key) {
    swal("L'électricité et les fenêtres ne sont pas fermés");
  } else if (gas && !electric && windows && !key) {
    swal("L'électricité n\'est pas fermé et vous n'avez pas vos clefs");
  } else if (gas && electric && !windows && !key) {
    swal("Les fenêtres ne sont pas fermés et vous n'avez pas vos clefs");
  } else if (!gas && !electric && !windows && key) {
    swal("Le gaz, l'électricité et les fenêtres ne sont pas fermés");
  } else if (gas && !electric && !windows && !key) {
    swal("Les fenêtres, l'électricité ne sont pas fermés et vous n'avez pas vos clefs");
  } else if (!gas && electric && !windows && !key) {
    swal("Le gaz,les fenêtres ne sont pas fermés et vous n'avez pas vos clefs");
  } else if (!gas && !electric && !windows && !key) {
    swal('Vous ne pouvez pas partir',
      'Vous n\'avez rien fait',
      'error');
  }
}

//D'autres facons de tout selectionner en une fois
// var inputs = document.getElementsByTagName("input");
// for (var input of inputs) {
//   console.log(input.checked);
// }

// inputs = document.getElementsByClassName("checklist-item");
// for (var input of inputs) {
//   console.log(input.checked);
// }

// inputs = document.querySelectorAll("div label input.cheklist-item");
// for (var input of inputs) {
//   console.log(input.checked);
// }



// function check() {
//   var inputs = document.querySelectorAll("div label input.checklist-item");
//   for (var input of inputs) {
//     if (!input.checked) {
//   document.querySelector("#message").innerHTML = "attendez, il reste des choses à faire";
//    break;
//     } else {
//       document.querySelector("#message").innerHTML = "vous pouvez y aller";
//     }
//   }
// }

// ou

// function go() {
//   var inputs = document.querySelectorAll("div label input.checklist-item");
//   var result = true;
//   for (var input of inputs) {
//     if (!input.checked) {
//       result = false;
//       break;
//     }
//   }
//   if (result) {
//     document.querySelector("#message").innerHTML = "Vous pouvez y aller";
//   } else {
//     document.querySelector("#message").innerHTML = "Attendez, il reste des choses à faire";
//   }
// }
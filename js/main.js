var titre = document.getElementById('titre');
var begin = document.getElementById('bouton');
var form = document.getElementById('form');
var pierre = document.getElementById('pierre');
var feuille = document.getElementById('feuille');
var ciseaux = document.getElementById('ciseaux');


titre.style.display='none';
form.style.visibility ='hidden';
pierre.style.visibility = 'hidden';
feuille.style.visibility = 'hidden';
ciseaux.style.visibility = 'hidden';


begin.onclick=function(){
  begin.style.display='none';
  titre.style.display ='block';
  form.style.visibility = 'visible';
  pierre.style.visibility = 'visible';
  feuille.style.visibility = 'visible';
  ciseaux.style.visibility = 'visible';
}



var pseudo = document.getElementById('pseudo');
var ok = document.getElementById('ok');
var bienvenue = document.getElementById('bienvenue');
var player_name = document.getElementById('player_name');
var value;

ok.onclick=function(){
value=pseudo.value;
bienvenue.innerHTML= "Bienvenue " + value.toUpperCase();
player_name.innerHTML= value.toUpperCase() ;
pseudo.style.display='none';
ok.style.display= 'none';
}

var choix_ordi = document.getElementById('choix_ordi');
var img_pierre = document.getElementsByTagName("IMG")[0].id;
var img_feuille = document.getElementsByTagName("IMG")[1].id;
var img_ciseaux = document.getElementsByTagName("IMG")[2].id;
var pointJoueur = 0;
var pointOrdi = 0;

function joueur(user_choice){
var ordi = Math.random()*3 ;
  if (ordi<1){
    ordi='pierre';
  }
  else if (ordi>1 && ordi<2){
    ordi='feuille';
  }
  else if (ordi>2){
    ordi='ciseaux';
  }

if(user_choice=='pierre' && ordi=="feuille" || user_choice=="feuille" && ordi=='ciseaux' || user_choice=='ciseaux' && ordi=='pierre'){
      pointOrdi++;
      alert("Perdu\n" + value +" "+ pointJoueur + " - ordi " + pointOrdi + "\nPour quitter le jeu, tapez 'exit'");
    }
    else if (user_choice=='pierre' && ordi=='ciseaux' || user_choice=="feuille" && ordi=='pierre' || user_choice=='ciseaux' && ordi=="feuille" ){
      pointJoueur++;
      alert("Gagné \n" + value +" "+ pointJoueur + " - ordi " + pointOrdi  + "\nPour quitter le jeu, tapez 'exit'");
    }
    else {
      alert("Nul !\n" + value +" "+ pointJoueur + " - ordi " + pointOrdi  + "\nPour quitter le jeu, tapez 'exit'");
    }
  }




/*var pierre = document.getElementById('pierre');
var feuille = document.getElementById('feuille');
var ciseaux = document.getElementById('ciseaux');
var pointJoueur = 0;
var pointOrdi = 0;
var ordi = Math.random()*3 ;

  if (ordi<1){
    ordi=pierre;
  }
  else if (ordi>1 && ordi<2){
    ordi=feuille;
  }
  else if (ordi>2){
    ordi=ciseaux;
  }

  if(jeu==pierre && ordi==feuille || jeu==feuille && ordi==ciseaux || jeu==ciseaux && ordi==pierre){
    pointOrdi++;
    alert("Perdu\n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi + "\nPour quitter le jeu, tapez 'exit'");
  }

  else if (jeu==pierre && ordi==ciseaux || jeu==feuille && ordi==pierre || jeu==ciseaux && ordi==feuille ){
    pointJoueur++;
    alert("Gagné \n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi  + "\nPour quitter le jeu, tapez 'exit'");
  }
  else {
    alert("Nul !\n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi  + "\nPour quitter le jeu, tapez 'exit'");
  }
 }
 }

// function myFunction(){
//   var el = document.getElementById("start");
//
// var pointJoueur = 0;
// var pointOrdi = 0;
//
//
// while (pointJoueur <3 && pointOrdi <3 && jeu!="exit"){
//         var ordi = Math.random()*3 ;
//         var jeu = prompt("Choisissez entre pierre, feuille ou ciseaux").toLowerCase();
//
//         if (ordi<1){
//           ordi="pierre";
//         }
//         else if (ordi>1 && ordi<2){
//           ordi="feuille";
//         }
//         else if (ordi>2){
//           ordi="ciseaux";
//         }
//
//         if(jeu==pierre && ordi=="feuille" || jeu=="feuille" && ordi=="ciseaux" || jeu=="ciseaux" && ordi==pierre){
//           pointOrdi++;
//           alert("Perdu\n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi + "\nPour quitter le jeu, tapez 'exit'");
//         }
//
//        else if (jeu=="pierre" && ordi=="ciseaux" || jeu=="feuille" && ordi=="pierre" || jeu=="ciseaux" && ordi=="feuille" ){
//           pointJoueur++;
//           alert("Gagné \n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi  + "\nPour quitter le jeu, tapez 'exit'");
//         }
//         else if (jeu=="pierre" && ordi=="pierre" || jeu=="feuille" && ordi=="feuille" || jeu=="ciseaux" && ordi=="ciseaux" ){
//           alert("Nul !\n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi  + "\nPour quitter le jeu, tapez 'exit'");
//         }
//         else if (jeu=="exit"){
//         	alert("Au revoir");
//        }
//        else if (jeu==""){
//        	alert('Vous devez choisir entre les 3 propositions !');
//        }
//        else {
//         alert('Veuillez entrer une donnée correcte !');
//       }
//   }
// }*/

var titre = document.getElementById('titre');
var begin = document.getElementById('bouton');
var form = document.getElementById('form');
var pierre = document.getElementById('pierre');
var feuille = document.getElementById('feuille');
var ciseaux = document.getElementById('ciseaux');
var ordi_choice = document.getElementById("ordi_choice");


titre.style.display='none';
form.style.visibility ='hidden';
pierre.style.visibility = 'hidden';
feuille.style.visibility = 'hidden';
ciseaux.style.visibility = 'hidden';
ordi_choice.style.display = 'none';


begin.onclick=function(){
  begin.style.display='none';
  form.style.visibility = 'visible';
}



var pseudo = document.getElementById('pseudo');
var ok = document.getElementById('ok');
var bienvenue = document.getElementById('bienvenue');
var titre_pseudo = document.getElementById('titre_pseudo');
var value;

ok.onclick=function(){
value=pseudo.value;
bienvenue.innerHTML= "BIENVENUE " + value.toUpperCase();
pseudo.style.display='none';
ok.style.display= 'none';
titre_pseudo.style.display = 'none';
titre.style.display ='block';
pierre.style.visibility = 'visible';
feuille.style.visibility = 'visible';
ciseaux.style.visibility = 'visible';
}


var img_pierre = document.getElementById("pierre").src;
var img_feuille = document.getElementsByTagName("IMG")[1];
var img_ciseaux = document.getElementsByTagName("IMG")[2];
var score = document.getElementById("score");
var pointJoueur = 0;
var pointOrdi = 0;


function joueur(user_choice){
ordi_choice.style.display = 'block';
var ordi = Math.random()*3 ;

  if (ordi<1){
    ordi='pierre';
    ordi_choice.innerHTML ="<img src='img/stones_grey.png' >";
  }
  else if (ordi>1 && ordi<2){
    ordi='feuille';
    ordi_choice.innerHTML = "<img src='img/leaf_grey.png'>";
  }
  else if (ordi>2){
    ordi='ciseaux';
    ordi_choice.innerHTML= "<img src='img/scissors_grey.png'>";
  }


    if (user_choice=='pierre' && ordi=="feuille" || user_choice=="feuille" && ordi=='ciseaux' || user_choice=='ciseaux' && ordi=='pierre'){
      pointOrdi++;
      bienvenue.innerHTML= "Perdu " ;
      score.innerHTML = value +" "+ pointJoueur + " - ordi " + pointOrdi
    }
    else if (user_choice=='pierre' && ordi=='ciseaux' || user_choice=="feuille" && ordi=='pierre' || user_choice=='ciseaux' && ordi=="feuille" ){
      pointJoueur++;
      bienvenue.innerHTML = "Gagné" ;
      score.innerHTML = value +" "+ pointJoueur + " - ordi " + pointOrdi ;
    }
    else if (user_choice=="pierre" && ordi=="pierre" || user_choice=="feuille" && ordi=="feuille" || user_choice=="ciseaux" && ordi=="ciseaux" ){
      bienvenue.innerHTML = "Nul !" ;
      score.innerHTML = value +" "+ pointJoueur + " - ordi " + pointOrdi;
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
 }*/

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

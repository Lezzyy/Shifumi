/*function myFunction(){
var el = document.getElementById("start");
var joueur = prompt ("Quel est votre pseudo ?");
var pointJoueur = 0;
var pointOrdi = 0;


while (pointJoueur <3 && pointOrdi <3 && jeu!="exit"){
        var ordi = Math.random()*3 ;
        var jeu = prompt("Choisissez entre pierre, feuille ou ciseaux").toLowerCase();

        if (ordi<1){
          ordi="pierre";
        }
        else if (ordi>1 && ordi<2){
          ordi="feuille";
        }
        else if (ordi>2){
          ordi="ciseaux";
        }

        if(jeu=="pierre" && ordi=="feuille" || jeu=="feuille" && ordi=="ciseaux" || jeu=="ciseaux" && ordi=="pierre"){
          pointOrdi++;
          alert("Perdu\n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi + "\nPour quitter le jeu, tapez 'exit'");
        }
       	else if (jeu=="pierre" && ordi=="ciseaux" || jeu=="feuille" && ordi=="pierre" || jeu=="ciseaux" && ordi=="feuille" ){
          pointJoueur++;
          alert("Gagné \n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi  + "\nPour quitter le jeu, tapez 'exit'");
        }
        else if (jeu=="pierre" && ordi=="pierre" || jeu=="feuille" && ordi=="feuille" || jeu=="ciseaux" && ordi=="ciseaux" ){
          alert("Nul !\n" + joueur +" "+ pointJoueur + " - ordi " + pointOrdi  + "\nPour quitter le jeu, tapez 'exit'");
        }
        else if (jeu=="exit"){
        	alert("Au revoir");
       }
       else if (jeu==""){
       	alert('Vous devez choisir entre les 3 propositions !');
       }
       else {
        alert('Veuillez entrer une donnée correcte !');
      }*/
  }
}

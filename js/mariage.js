
const couleur =     "Cliquer ici pour Coloriser";
const noiretblanc = "Cliquer ici pour Noir-Blanc";
const commentaires = "Afficher Commentaires"
const no_commentaires = "Effacer Commentaires"



  function toggle_comment_ornot_edelin() {
    if (document.getElementById("photo_mariage_comment_edelin").style.visibility != "visible" ) {
        document.getElementById("photo_mariage_comment_edelin").style.visibility = "visible";
        document.getElementById("button_mariage_edelin").textContent =no_commentaires ;
    } else {
        document.getElementById("photo_mariage_comment_edelin").style.visibility = "hidden"; 
        document.getElementById("button_mariage_edelin").textContent = commentaires ;
    }
  };

    function toggle_comment_ornot_morantin() {
      if (document.getElementById("photo_mariage_comment_morantin").style.visibility != "visible" ) {
          document.getElementById("photo_mariage_comment_morantin").style.visibility = "visible";
          document.getElementById("button_mariage_morentin").textContent =no_commentaires ;
      } else {
          document.getElementById("photo_mariage_comment_morantin").style.visibility = "hidden"; 
          document.getElementById("button_mariage_morentin").textContent = commentaires ;
      }
      


  };




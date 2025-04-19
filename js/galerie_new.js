//let baliseZoneProposition = document.getElementById("zoneProposition");
//console.log(baliseZoneProposition);

const couleur =     "Cliquer ici pour Coloriser";
const noiretblanc = "Cliquer ici pour Noir-Blanc";
const commentaires = "ʘ avec commentaires"
const no_commentaire = "ʘ sans commentaire"


function writeMilou () {

    document.getElementById("Louise").innerHTML = "Louise";
}



  function photo_click () {
    
  }
  
  

 
/* const Arealist = document.getElementsByTagName("img");
if( Arealist.length > 0 ){
    for (let h = 0; h < Arealist.length; h++) {
        Arealist[h].addEventListener('click',photo_click);  
     }
}else{
    alert("pas trouvé img"); 
}

 */
 
 function clickOK (){
	 
 };
 
const images = document.querySelectorAll('img');

function addclass (image) {
lightbox.classList.add('active');
const img = document.createElement('img');
img.src = image.src;

while (lightbox.firstChild) {
 lightbox.removeChild(lightbox.firstChild)
 };
 lightbox.appendChild(img);


};

function ecouteur (image) { image.addEventListener('click',addclass(image))};


images.forEach(ecouteur);



const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})


lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})

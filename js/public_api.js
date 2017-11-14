//declaration des variable globale
var employeElt = document.getElementById('employe');

//utilistion de la fonction ajaxGet pour afficher les douze profils
ajaxGet("https://randomuser.me/api/?results=12", function(reponse) {
  var profil = JSON.parse(reponse);
  var mesProfils = profil.results;
  for (var i = 0; i < mesProfils.length; i++) {
    var profilElt = document.createElement('div');
    profilElt.setAttribute("id", "profil")
    profilElt.innerHTML =`
      <div onclick=caca(this)>
        <img data-img="{mesProfils[i].picture.medium}" src="${mesProfils[i].picture.medium}" id="img">
        <div id="description">
          <p id="info">
            ${mesProfils[i].name.title}
            ${mesProfils[i].name.first}
            ${mesProfils[i].name.last}
          </p>
          <p class="infosecondaire">
            ${mesProfils[i].email}
          </p>
          <p class="infosecondaire">
            ${mesProfils[i].location.city}
          </p>
        <div>
      </div>
      `;
employeElt.appendChild(profilElt);
  }
});

//partie de lightbox
var body = document.querySelector('body');
function caca(employeHtml) {
  var essais = employeHtml;
  essais.setAttribute('class', 'overlaytitle');

  //création d'un élément
  var lightboxElt = document.createElement('div');
  lightboxElt.setAttribute('id', 'overlay');
body.appendChild(lightboxElt);
lightboxElt.appendChild(essais);

  //ajout de la lightbox au body

  lightboxElt.addEventListener('click', function(){

      lightboxElt.remove();
  
  });


}

// function lightbox() {
//
// }
//
// document.getElementById('img').addEventListener('click', function(){
//   lightbox();
// });

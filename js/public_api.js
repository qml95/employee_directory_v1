//declaration des variable globale
var employeElt = document.getElementById('employe');

//utilistion de la fonction ajaxGet pour afficher les douze profils
//debut de la fonction recuperationApi
recuperationApi("https://randomuser.me/api/?results=12&nat=FR", function(reponse) {
  var profil = JSON.parse(reponse);
  var mesProfils = profil.results;
  for (var i = 0; i < mesProfils.length; i++) {
    var profilElt = document.createElement('div');
    profilElt.setAttribute("class", "profil")
    profilElt.innerHTML =`
      <div onclick=over(this)>
        <img src="${mesProfils[i].picture.medium}" class="img">
        <div class="description">
          <p class="info">
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
          </div>
          <div class="infoscache">
          <hr>
            <p>Tel :
              ${mesProfils[i].phone}
            </p>
            <p>
              ${mesProfils[i].location.street} ${mesProfils[i].location.postcode} ${mesProfils[i].location.state}
            </p>
            <p>Anniversaire :
              ${mesProfils[i].dob}
            </p>

          </div>
      `;



employeElt.appendChild(profilElt);

  }

}); // fin fonction recuperationApi

/*//////////////////////////////////////////////////////////////////////
                      partie pour la light box
//////////////////////////////////////////////////////////////////////*/

//recuperation du body du dom
var body = document.querySelector('body');


//debut fonction over
function over(employeHtml) {

  var infos = employeHtml.cloneNode(employeHtml);
  infos.setAttribute('class', 'overlaytitle');


  //création d'éléments
  var lightboxElt = document.createElement('div');
  lightboxElt.setAttribute('id', 'overlay');

  //addEventListener pour quitter la lightbox
  lightboxElt.addEventListener('click', function(){

      lightboxElt.remove();

  });

  //ajout des elements
body.appendChild(lightboxElt);
lightboxElt.appendChild(infos);

} // fin fonction over

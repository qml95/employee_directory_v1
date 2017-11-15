//declaration des variable globale
var employeElt = document.getElementById('employe');

//utilistion de la fonction ajaxGet pour afficher les douze profils
ajaxGet("https://randomuser.me/api/?results=12&nat=FR", function(reponse) {
  var profil = JSON.parse(reponse);
  console.log(profil);
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
        <div>
      </div>
      `;
employeElt.appendChild(profilElt);
  }
});

//partie de lightbox
var body = document.querySelector('body');
function over(employeHtml) {
  var infos = document.createElement('div');
  var infos = employeHtml.cloneNode(true);
  infos.setAttribute('class', 'overlaytitle');

  //création d'éléments
  var lightboxElt = document.createElement('div');
  lightboxElt.setAttribute('id', 'overlay');

  // var infosComplementaire = document.createElement('div');

  // infosComplementaire.innerHTML = `
  //
  //                   <p>
  //                     test
  //                   </p>
  // `

  //ajout de la lightbox au body

  lightboxElt.addEventListener('click', function(){

      lightboxElt.remove();

  });

  //ajout des elements
body.appendChild(lightboxElt);
lightboxElt.appendChild(infos);
// infos.appendChild(infosComplementaire);

}

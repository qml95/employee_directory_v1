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
        <img src="${mesProfils[i].picture.medium}">
        <p id="description">
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
        <p>
      `;
employeElt.appendChild(profilElt);
  }
});

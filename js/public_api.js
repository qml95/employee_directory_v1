//declaration des variable globale
var employeElt = document.getElementById('employe');


//utilistion de la fonction AJAX en Appelle
ajaxGet("https://randomuser.me/api/?results=12", function(reponse) {
  var profil = JSON.parse(reponse);
  console.log(profil);
  var profilElt = document.createElement('div');
  profilElt.setAttribute("id", "profil")
  profilElt.innerHTML =`
    <img src="${profil.results[0].picture.medium}">
    <p id="description">
    <p id="info">
      ${profil.results[0].name.title}
      ${profil.results[0].name.first}
      ${profil.results[0].name.last}
    </p>
    <p class="infosecondaire">
      ${profil.results[0].email}
    </p>
    <p class="infosecondaire">
      ${profil.results[0].location.city}
    </p>
    <p>
  `;


  console.log(profilElt);
  employeElt.appendChild(profilElt);
});

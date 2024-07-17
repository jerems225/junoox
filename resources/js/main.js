const logoAnimate = document.querySelector(".logo_animate");
const letters = Array.from(logoAnimate.children);

anime({
  targets: letters,
  translateX: 50,
  translateY: -15,
  direction: "alternative", // Correction : "alternate" au lieu de "alternative"
  // loop: true,
  duration: 6000,
  delay: function (el, i, l) {
    return i * 200;
  },
  endDelay: function (el, i, l) {
    return (l - i) * 200;
  },
});



document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("junoox_search_engine");
  var searchButton = document.getElementById("search_icon_svg");

  // Focus sur le champ de recherche
  searchInput.focus();

  // Fonction de redirection vers la page de résultats
  function redirectToSearchResults(query) {
    if (query === "") {
      return; // Arrête la fonction si le champ de recherche est vide
    }

    // Redirection vers l'URL de recherche avec la valeur de la requête
    window.location.href =
      "http://search.junoox.com/index.php?page=search/web&search=" +
      encodeURIComponent(query) +
      "&type=web";
  }

  // Action lorsque la touche "Enter" est pressée dans le champ de recherche
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Empêche le comportement par défaut du formulaire
      var query = searchInput.value.trim();
      redirectToSearchResults(query);
    }
  });


  // Action lorsque le bouton est cliqué
  searchButton.addEventListener("click", function () {
    var query = searchInput.value.trim();
    redirectToSearchResults(query);
  });


});




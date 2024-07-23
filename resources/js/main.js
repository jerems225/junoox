// const logoAnimate = document.querySelector(".logo_animate");
// const letters = Array.from(logoAnimate.children);

// anime({
//   targets: letters,
//   translateX: 50,
//   translateY: -15,
//   direction: "alternative", // Correction : "alternate" au lieu de "alternative"
//   // loop: true,
//   duration: 6000,
//   delay: function (el, i, l) {
//     return i * 200;
//   },
//   endDelay: function (el, i, l) {
//     return (l - i) * 200;
//   },
// });

const menuIcon = document.querySelector('#menu_dropdown_icon');
const navServicesLinks = document.querySelector('.navbar_services_links');

menuIcon.addEventListener('click', () => {
  const ActiveNav = navServicesLinks.classList.toggle('active');
  if(ActiveNav){
    menuIcon.children[0].style.display = 'none';
    menuIcon.children[1].style.display = 'flex';
  }
  else {
    menuIcon.children[0].style.display = 'flex';
    menuIcon.children[1].style.display = 'none';
  }
})




document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("junoox_search_engine");
  var searchButton = document.getElementById("search_icon_svg");

  searchInput.focus();


  function redirectToSearchResults(query) {
    if (query === "") {
      return; 
    }

    window.location.href =
      "http://search.junoox.com/index.php?page=search/web&search=" +
      encodeURIComponent(query) +
      "&type=web";
  }

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      var query = searchInput.value.trim();
      redirectToSearchResults(query);
    }
  });

  searchButton.addEventListener("click", function () {
    var query = searchInput.value.trim();
    redirectToSearchResults(query);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
      const header = item.querySelector(".accordion-header");
      header.addEventListener("click", () => {
          const content = item.querySelector(".accordion-content");

          if (item.classList.contains("active")) {
              content.style.maxHeight = null;
              content.style.padding = "0 10px";
              item.classList.remove("active");
          } else {
              // Ferme tous les autres items
              accordionItems.forEach(accItem => {
                  const accContent = accItem.querySelector(".accordion-content");
                  if (accItem !== item && accItem.classList.contains("active")) {
                      accContent.style.maxHeight = null;
                      accContent.style.padding = "0 10px";
                      accItem.classList.remove("active");
                  }
              });

              content.style.maxHeight = content.scrollHeight + "0px";
              content.style.padding = "10px";
              item.classList.add("active");
          }
      });
  });
});

const dropdown_link = document.querySelector('.dropdown_link');
dropdown_link.addEventListener('click', () => {
  dropdown_link.children[0].classList.toggle('rotate_icon');
})









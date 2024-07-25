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

const dropdown_link = document.querySelector('.dropdown_link');
dropdown_link.addEventListener('click', () => {
  dropdown_link.children[0].classList.toggle('rotate_icon');
})
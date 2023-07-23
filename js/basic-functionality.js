function classToggle() {
  const navs = document.querySelectorAll('.navbar')
  
  navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
}
document.querySelector('.navbar-toggle')
  .addEventListener('click', classToggle);
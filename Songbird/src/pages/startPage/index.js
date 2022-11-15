(function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navItems = document.querySelector('.navigation');
  const NavItems = document.querySelector('.list-items');
  const closeMenuByLink = document.querySelectorAll('.nav-link');
  const scrollBehaviour = document.querySelector('.body');
  const overlay = document.querySelector('.overlay-blackout');
  burgerMenu.addEventListener('click', () => {
    navItems.classList.toggle('navigation-active');
    burgerMenu.classList.toggle('burger-menu-active');
    overlay.classList.toggle('overlay-blackout-active');
    const paddingOfset = `${window.innerWidth - document.body.offsetWidth}px`;
    document.body.style.paddingRight = paddingOfset;
    scrollBehaviour.classList.toggle('overlay');
  });
  overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay-blackout-active');
    burgerMenu.classList.remove('burger-menu-active');
    navItems.classList.remove('navigation-active');
    document.body.style.paddingRight = 0;
    scrollBehaviour.classList.remove('overlay');
  });
}());

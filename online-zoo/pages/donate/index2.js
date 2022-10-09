(function () {
  const burgerMenu = document.querySelector('.burger-menu')  ;
  const navItems = document.querySelector('.navigation')
  const NavItems = document.querySelector('.nav-list')
  const closeMenuByLink = document.querySelectorAll('.nav-link')
  const designeVisible = document.querySelector('.text-design-burger')
  const scrollBehaviour = document.querySelector('.body')
  const logoVisible = document.querySelector('.logo-burger-menu')
  const overlay = document.querySelector('.overlay-blackout')
  burgerMenu.addEventListener('click', () => {
      navItems.classList.toggle('navigation-active')
      burgerMenu.classList.toggle('burger-menu-active')
      overlay.classList.toggle('overlay-blackout-active')
      designeVisible.classList.add('text-design-burger-active')
      logoVisible.classList.add('logo-burger-menu-active')
      let paddingOfset = window.innerWidth - document.body.offsetWidth + 'px'
      document.body.style.paddingRight = paddingOfset
      scrollBehaviour.classList.toggle('overlay')

  });
  overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay-blackout-active')
    burgerMenu.classList.remove('burger-menu-active')
    navItems.classList.remove('navigation-active')
    document.body.style.paddingRight = 0;
    scrollBehaviour.classList.remove('overlay')
    designeVisible.classList.remove('text-design-burger-active')
    logoVisible.classList.remove('logo-burger-menu-active')

  } )

}());
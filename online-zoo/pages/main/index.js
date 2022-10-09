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
      designeVisible.classList.toggle('text-design-burger-active')
      logoVisible.classList.toggle('logo-burger-menu-active')
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


//Pop-up
const scrollBehaviour = document.querySelector('.body')
const overlay = document.querySelector('.overlay-blackout')
const CardOscar = document.querySelector('.card-Oscar')
const CardUser = document.querySelector('.card-user')
const CardFrederica = document.querySelector('.card-Frederica')
const VisiblePopUpUser = document.querySelector('.comment-card-modal')
const cross = document.querySelector('.cross')
CardUser.addEventListener('click', () => {
  VisiblePopUpUser.classList.add('comment-card-modal-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
})

cross.addEventListener('click', () => {
  VisiblePopUpUser.classList.remove('comment-card-modal-active')
  overlay.classList.remove('overlay-blackout-active')
  scrollBehaviour.classList.remove('overlay')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay-blackout-active')
  VisiblePopUpUser.classList.remove('comment-card-modal-active')

})

CardOscar.addEventListener('click', () => {
  VisiblePopUpUser.classList.add('comment-card-modal-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
})

cross.addEventListener('click', () => {
  VisiblePopUpUser.classList.remove('comment-card-modal-active')
  overlay.classList.remove('overlay-blackout-active')
  scrollBehaviour.classList.remove('overlay')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay-blackout-active')
  VisiblePopUpUser.classList.remove('comment-card-modal-active')

})

CardFrederica.addEventListener('click', () => {
  VisiblePopUpUser.classList.add('comment-card-modal-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
})

cross.addEventListener('click', () => {
  VisiblePopUpUser.classList.remove('comment-card-modal-active')
  overlay.classList.remove('overlay-blackout-active')
  scrollBehaviour.classList.remove('overlay')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay-blackout-active')
  VisiblePopUpUser.classList.remove('comment-card-modal-active')

})


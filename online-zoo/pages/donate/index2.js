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



//Amount

const allPrices = document.querySelectorAll('.price-label')
const inputNumber = document.querySelector('.input-number')
const radioButtons = document.querySelectorAll('.nav-button')
const yellowButtons = document.querySelectorAll('.button-slider')
const initialPrice = document.querySelector('.btn6')

radioButtons.forEach(x => x.addEventListener('click', (event) => {
  initialPrice.classList.remove('btn6')
  yellowButtons.forEach(y => y.classList.remove('circle'))
event.target.classList.add('circle')
}))






  inputNumber.addEventListener('input', () => {
    allPrices.forEach(price => {
      if(inputNumber.value > 9999) {
        inputNumber.value = 9999
      }
      if(inputNumber.value < 0) {
        inputNumber.value = 0
      }
      if (price.textContent === inputNumber.value) {
        price.classList.add('orange-label')
      }else {
        price.classList.remove('orange-label')
      }
  })})

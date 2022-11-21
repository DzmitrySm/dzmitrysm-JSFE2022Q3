console.log(localStorage.getItem('finaly'))

const congratulationMessage = document.querySelector('.congratulation');
const linkNextGame = document.querySelector('.link-play-or-not');
const wrapperLink = document.querySelector('.wrapper-link');


congratulationMessage.textContent = `Поздравляем вы прошли викторину и набрали ${localStorage.getItem('finaly')} из 30 возможных баллов`;
wrapperLink.addEventListener('click', () => {
  if (+localStorage.getItem('finaly') === 30) {
    congratulationMessage.textContent = 'Конец игры, вы на, наверное, очень любите птиц';
    wrapperLink.disabled = true;
  } else {
    congratulationMessage.textContent = 'Попробовать ещё раз';
    linkNextGame.href = '../quizPage/index.html';
  }
})
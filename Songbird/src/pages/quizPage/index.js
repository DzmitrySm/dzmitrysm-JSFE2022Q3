const audio = document.querySelector('.audio-pl');
const btnPlay = document.querySelector('.circle-btn-play');
const imgPlay = document.querySelector('.btn-play-img');
btnPlay.addEventListener('click', () => {
  imgPlay.src = '../../assets/images/pause-btn.png';
  audio.src = '../../assets/sounds/tit-bird.mp3';
  playAudio();
});

let isPlay = false;
function playAudio() {
  if (!isPlay) {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  } else if (isPlay) {
    audio.pause();
    isPlay = false;
    imgPlay.src = '../../assets/images/play-btn.png';
  }
}

/* function currentDuration(time) {
  let min = Math.floor(time % 60);
  let sec =
} */

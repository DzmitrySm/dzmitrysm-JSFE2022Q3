const audio = document.querySelector('.audio-pl');
const btnPlay = document.querySelector('.circle-btn-play');
const imgPlay = document.querySelector('.btn-play-img');
const currSongDur = document.querySelector('.current-song-duration');
const volumeInput = document.querySelector('.inp-vol-range');
const volumeImg = document.querySelector('.volume-icon');
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

audio.addEventListener('timeupdate', function () {
  currSongDur.innerHTML = currentDuration(audio.currentTime);
}, false);

function currentDuration(time) {
  let min = Math.floor(time % 60);
  min = 0;
  let sec = Math.ceil((time / 60 * 60) % 60)
 if(sec === 60) {
  sec = 0;
  min = min + 1;
}
if(sec < 10) {
  sec = `0${sec}`
}
return `${min}:${sec}`

}


volumeInput.addEventListener('input', () => {
  audio.volume = volumeInput.value;
  if (volumeInput.value === '0') {
    volumeImg.src = '../../assets/images/volume-off.png';
  }else {
    volumeImg.src = '../../assets/images/volume-on.png';
  }
}, false);

audio.addEventListener('ended', () => {
  audio.currentTime = 0;
  imgPlay.src = '../../assets/images/play-btn.png';
}, false);

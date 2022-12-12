/* global document */
const body = document.querySelector('body');
const container = document.createElement('div');
container.className = 'wrapper';
body.append(container);
const wrapperSizeChoice = document.createElement('div');
wrapperSizeChoice.className = 'wrapper-size-choice';
container.append(wrapperSizeChoice);
const playArea = document.createElement('div');
playArea.className = 'wrapper-play-area';
container.append(playArea);
const buttonVoice = document.createElement('button');
buttonVoice.className = 'voice-button';
buttonVoice.textContent = 'Voice on';
container.prepend(buttonVoice);
const wrapperButtons = document.createElement('div');
wrapperButtons.className = 'wrapper-buttons';
container.append(wrapperButtons);
const buttonShuffle = document.createElement('button');
buttonShuffle.className = 'shuffle-button';
buttonShuffle.textContent = 'Shuffle';
wrapperButtons.append(buttonShuffle);
const textMoveGame = document.createElement('span');
textMoveGame.className = 'text-move';
textMoveGame.textContent = 'Move: ';
wrapperButtons.append(textMoveGame);
const countMoveGame = document.createElement('span');
countMoveGame.className = 'count-move';
countMoveGame.textContent = 0;
wrapperButtons.append(countMoveGame);
const textTimer = document.createElement('span');
textTimer.className = 'timer';
textTimer.textContent = 'Time: ';
wrapperButtons.append(textTimer);
const watchDiv = document.createElement('div');
watchDiv.className = 'watch';
watchDiv.textContent = '00:00';
wrapperButtons.append(watchDiv);
const voiceOFMove = document.createElement('audio');
voiceOFMove.src = '../src/assets/audio/beep-7.mp3';
body.append(voiceOFMove);
const winMessage = document.createElement('div');
winMessage.className = 'win-message';
body.append(winMessage);

function addSpansSizes() {
  const sizesNumber = 2;

  for (let i = 0; i < sizesNumber; i++) {
    const sizeGame = document.createElement('span');
    sizeGame.className = 'size-item';
    sizeGame.textContent = `${i + 3}x${i + 3}`;
    wrapperSizeChoice.append(sizeGame);
  } const allSpans = document.querySelectorAll('.size-item');
  allSpans[1].classList.add('active-size-item')
}
addSpansSizes();

function addItems() {
  for (let i = 0; i < 16; i++) {
    const item = document.createElement('div');
    const spanItem = document.createElement('span');
    item.className = 'puzzle-item';
    spanItem.className = 'span-item';
    spanItem.innerHTML = i + 1;
    playArea.append(item);
    item.append(spanItem);
  }
}
addItems();
const divItems = document.querySelectorAll('.puzzle-item');
const items = document.querySelectorAll('.span-item');
const arrItems = Array.from(items);

function getArrayOfNumbers() {
  for (let i = 0; i < arrItems.length; i++) {
    arrItems[i] = +arrItems[i].innerHTML;
  }
  return arrItems;
}
const arr = getArrayOfNumbers();

let matrix = addMatrix(arr);

function addMatrix(arr) {
  const matrix = [[], [], [], []];
  let x = 0;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    if (x > 3) {
      y++
      x = 0;
    }
    matrix[y][x] = arr[i];
    x++
  }
  return matrix;
}

function setStylesTransformItem(item, x, y) {
  const shiftItem = 100;
  item.style.transform = `translate3D(${shiftItem * x}%,${shiftItem * y}%, 0 )`;
}

function setPositionItems(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const item = divItems[matrix[y][x] - 1];
      setStylesTransformItem(item, x, y);
    }
  }
}
setPositionItems(matrix);

divItems[divItems.length - 1].style.display = 'none';

function shuffleArr() {
    return arr.sort(() => Math.random() - 0.5);
}

buttonShuffle.addEventListener('click', () => {
  const shuffledArr = shuffleArr(matrix.flat());
  matrix = addMatrix(shuffledArr);
  setPositionItems(matrix);
  countMoveGame.textContent = 0;
  reset();
  startTimer();
  body.classList.remove('won-class')
});

//ChangePosition by click
playArea.addEventListener('click', (event) => {
  if (!event.target.closest('div') || +event.target.closest('div').textContent === 16) {
    return;
  }
  const numberOfItem = +event.target.closest('div').textContent;
  const itemPosition = findPositionByNumber(numberOfItem, matrix);
  const indexEmptyItem = 16;
  const emptyItemPosition = findPositionByNumber(indexEmptyItem, matrix);
  const isChangePosition = changePosition(itemPosition, emptyItemPosition);
  if (isChangePosition) {
    movePuzzle(itemPosition, emptyItemPosition, matrix);
    setPositionItems(matrix);
    countMoveGame.textContent = +countMoveGame.textContent + 1;
    if(!buttonVoice.classList.contains('change-voice')) {
      playAudio()
    }else {
      voiceOFMove.pause()
      voiceOFMove.currentTime = 0;
    }
    win(matrix);
  }
});

function findPositionByNumber(number, matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === number) {
        return { x, y };
      }
    }
  }
  return null;
}

function changePosition(coord1, coord2) {
  if (coord1 === null) {
    return;
  }
  const diffX = Math.abs(coord1.x - coord2.x);
  const diffY = Math.abs(coord1.y - coord2.y);
  return (diffX === 1 || diffY === 1) && (coord1.x === coord2.x || coord1.y === coord2.y);
}

function movePuzzle(coord1, coord2, matrix) {
  const coord1Number = matrix[coord1.y][[coord1.x]];
  matrix[coord1.y][[coord1.x]] = matrix[coord2.y][[coord2.x]];
  matrix[coord2.y][[coord2.x]] = coord1Number;
}

let seconds = 0;
let interval = null;

function timer() {
  seconds++

  let secs = seconds % 60;
  let minutes = Math.floor(seconds / 60);
  if(secs < 10) {
    secs = '0' + secs;
  }
  if(minutes < 10) {
    minutes = '0' + minutes;
  }

  watchDiv.textContent = `${minutes}:${secs}`;
}

function startTimer() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}
function reset() {
  stopTimer();
  seconds = 0;
  watchDiv.textContent = '00:00';
}

function playAudio() {
  voiceOFMove.currentTime = 0;
  voiceOFMove.play();
}

buttonVoice.addEventListener('click', () => {
  buttonVoice.classList.toggle('change-voice');
  if (buttonVoice.classList.contains('change-voice')) {
    buttonVoice.textContent = 'Voice off';
  } else {
    buttonVoice.textContent = 'Voice on';
  }
});

function win(matrix) {
  const winArr = [];
  for (let i = 1; i < 17; i++) {
    winArr.push(i);
  }
  for (let j = 0; j < winArr.length; j++) {
    if (winArr[j] !== matrix.flat()[j]) {
      return false;
    }
  }
  body.classList.add('won-class');
  winMessage.textContent = `Ура, вы решили головоломку за ${watchDiv.textContent} и ${countMoveGame.innerHTML} ходов`;

}

//Game 3x3
function addItems9() {
  for (let i = 0; i < 9; i++) {
    const item = document.createElement('div');
    const spanItem = document.createElement('span');
    item.className = 'puzzle-item9';
    spanItem.className = 'span-item9';
    spanItem.innerHTML = i + 1;
    item.style.width = '33.3%';
    item.style.height = '33.3%';
    playArea.append(item);
    item.append(spanItem);
item.style.visibility = 'hidden';
  }
}

wrapperSizeChoice.addEventListener('click', (event) => {
  if (event.target.className === 'wrapper-size-choice') {
    return;
  } if (event.target.textContent === '3x3') {
    playArea.style.pointerEvents = 'none';
    reset();
    countMoveGame.textContent = 0;
    const allSizesSpans = document.querySelectorAll('.size-item');
    allSizesSpans.forEach(x => x.classList.remove('active-size-item'));
    event.target.classList.add('active-size-item');
    divItems.forEach(x=>x.style.visibility = 'hidden');
    const item = document.querySelectorAll('.puzzle-item9');
    item.forEach(x => x.style.visibility = 'visible');
  } else {
    playArea.style.pointerEvents = 'none';
    reset();
    countMoveGame.textContent = 0;
    const allSizesSpans = document.querySelectorAll('.size-item');
    allSizesSpans.forEach((x) => x.classList.remove('active-size-item'));
    event.target.classList.add('active-size-item');
    divItems.forEach(x=>x.style.visibility = 'visible');
    const item = document.querySelectorAll('.puzzle-item9');
    item.forEach(x => x.style.visibility = 'hidden');
}
});

function getArrayOfNumbers9() {
  addItems9();
  const divItems = document.querySelectorAll('.puzzle-item9');
  const items = document.querySelectorAll('.span-item9');
  const arrItems = Array.from(items);

  for (let i = 0; i < arrItems.length; i++) {
    arrItems[i] = +arrItems[i].innerHTML;
  }
  return arrItems;
}
const arr9 = getArrayOfNumbers9();
console.log(arr9);

function addMatrix9(arr9) {
  const matrix = [[], [], []];
  let x = 0;
  let y = 0;
  for (let i = 0; i < arr9.length; i++) {
    if (x > 2) {
      y++
      x = 0;
    }
    matrix[y][x] = arr9[i];
    x++
  }
  return matrix;
}

let matrix9 = addMatrix9(arr9);
console.log(matrix9);

function setStylesTransformItem9(item, x, y) {
  const shiftItem = 100;
  item.style.transform = `translate3D(${shiftItem * x}%,${shiftItem * y}%, 0 )`;
}

function setPositionItems9(matrix9) {
  const divItems = document.querySelectorAll('.puzzle-item9');
  divItems[divItems.length - 1].style.display = 'none';
  for (let y = 0; y < matrix9.length; y++) {
    for (let x = 0; x < matrix9[y].length; x++) {
      const item = divItems[matrix9[y][x] - 1];
      setStylesTransformItem9(item, x, y);
    }
  }
}
setPositionItems9(matrix9);

playArea.addEventListener('click', (event) => {
  if (!event.target.closest('div') || +event.target.closest('div').textContent === 9) {
    return;
  }
  const numberOfItem = +event.target.closest('div').textContent;
  const itemPosition = findPositionByNumber9(numberOfItem, matrix9);
  const indexEmptyItem = 9;
  const emptyItemPosition = findPositionByNumber9(indexEmptyItem, matrix9);
  const isChangePosition = changePosition9(itemPosition, emptyItemPosition);
  if (isChangePosition) {
    movePuzzle9(itemPosition, emptyItemPosition, matrix9);
    setPositionItems9(matrix9);
    countMoveGame.textContent = +countMoveGame.textContent + 1;
    if(!buttonVoice.classList.contains('change-voice')) {
      playAudio();
    }else {
      voiceOFMove.pause();
      voiceOFMove.currentTime = 0;
    }
    win9(matrix9);
  }
});

function findPositionByNumber9(number, matrix9) {
  for (let y = 0; y < matrix9.length; y++) {
    for (let x = 0; x < matrix9[y].length; x++) {
      if (matrix9[y][x] === number) {
        return { x, y };
      }
    }
  }
  return null;
}

function changePosition9(coord1, coord2) {
  if (coord1 === null) {
    return;
  }
  const diffX = Math.abs(coord1.x - coord2.x);
  const diffY = Math.abs(coord1.y - coord2.y);
  return (diffX === 1 || diffY === 1) && (coord1.x === coord2.x || coord1.y === coord2.y);

}

function movePuzzle9(coord1, coord2, matrix9) {
  const coord1Number = matrix9[coord1.y][[coord1.x]];
  matrix9[coord1.y][[coord1.x]] = matrix9[coord2.y][[coord2.x]];
  matrix9[coord2.y][[coord2.x]] = coord1Number;
}

function win9(matrix9) {
  const winArr = [];
  for (let i = 1; i < 10; i++) {
    winArr.push(i);
  }
  for (let j = 0; j < winArr.length; j++) {
    if (winArr[j] !== matrix9.flat()[j]) {
      return false;
    }
  }
  body.classList.add('won-class');
  winMessage.textContent = `Ура, вы решили головоломку за ${watchDiv.textContent} и ${countMoveGame.innerHTML} ходов`;
  stopTimer();
}

function shuffleArr9() {
  return arr9.sort(() => Math.random() - 0.5);
}
console.log(shuffleArr9());

buttonShuffle.addEventListener('click', () => {
  playArea.style.pointerEvents = 'auto';
  const shuffledArr = shuffleArr(matrix.flat());
  const shuffledArr9 = shuffleArr9(matrix9.flat());
  console.log(matrix9);
  matrix9 = addMatrix9(shuffledArr9);
  matrix = addMatrix(shuffledArr);
  setPositionItems9(matrix9);
  setPositionItems(matrix);
  countMoveGame.textContent = 0;
  reset();
  startTimer();
  body.classList.remove('won-class');
});

const body = document.querySelector('body');
const container = document.createElement('div');
container.className = 'wrapper';
body.append(container);
const playArea = document.createElement('div');
playArea.className = 'wrapper-play-area';
container.append(playArea);
const wrapperButtons = document.createElement('div');
wrapperButtons.className = 'wrapper-buttons';
container.append(wrapperButtons);
const buttonShuffle = document.createElement('button');
buttonShuffle.className = 'shuffle-button';
buttonShuffle.textContent = 'Shuffle';
wrapperButtons.append(buttonShuffle);
const textMoveGame = document.createElement('span')
textMoveGame.className = 'text-move'
textMoveGame.textContent = 'Move: ';
wrapperButtons.append(textMoveGame);
const countMoveGame = document.createElement('span')
countMoveGame.className = 'count-move';
countMoveGame.textContent = 0;
wrapperButtons.append(countMoveGame);

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
  }
})


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
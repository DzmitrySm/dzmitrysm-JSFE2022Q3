const body = document.querySelector('body');
const container = document.createElement('div');
container.className = 'wrapper';
body.append(container);
const playArea = document.createElement('div');
playArea.className = 'wrapper-play-area';
container.append(playArea);

function addItems() {
  for (let i = 0; i < 16; i++) {
    const item = document.createElement('div');
    item.className = 'puzzle-item';
    playArea.append(item);
  }
}

addItems();


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let shufleArr = arr.sort(() => Math.random() - 0.5)

function shufleNumbers() {
  let item = document.querySelectorAll('.puzzle-item')
  for (let i = 0; i < shufleArr.length; i++) {
    item[i].innerHTML = shufleArr[i];
  }
}
shufleNumbers()

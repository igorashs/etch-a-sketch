'use strict';

function makeNewGrid(count, size) {
  let gridContainer = document.querySelector('.grid-container');

  if (gridContainer) {
    gridContainer.remove();
  }

  gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  gridContainer.style.gridTemplate = `repeat(${count}, ${size /
    count}px) / repeat(${count}, ${size / count}px)`;

  for (let i = 0; i < count * count; i++) {
    let element = document.createElement('div');
    element.classList.add('grid-element');
    gridContainer.appendChild(element);
  }
  const etchContainer = document.querySelector('.etch-container');

  etchContainer.insertBefore(gridContainer, etchContainer.lastElementChild);
}

function resetGrid() {}

function selectRandom() {}

function selectBlack() {}

function selectWhite() {}

const makeNewGridBtn = document.querySelector('.new-grid-btn');

makeNewGridBtn.addEventListener('click', (e) => {
  const currentCount = 2 ** +document.getElementById('gird-size').value;
  makeNewGrid(currentCount, GRID_SIZE);
});

const WHITE = 'hsla(0, 50%, 100%, 1)';
const BLACK = 'hsla(0, 0%, 90%, 1)';

const GRID_SIZE = 512;
let elementsCount = 16;

// hsla(270, 50%, 90%, 1) random purple 0-360 random 90% will decrease each hover

makeNewGrid(elementsCount, GRID_SIZE);

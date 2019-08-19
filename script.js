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
    element.style.backgroundColor = WHITE;
    gridContainer.appendChild(element);
  }
  const etchContainer = document.querySelector('.etch-container');

  etchContainer.insertBefore(gridContainer, etchContainer.lastElementChild);

  gridContainer.addEventListener('mouseover', (e) => {
    if (!e.target.classList.contains('grid-container')) {
      let rgb = e.target.style.backgroundColor.match(REGX_RGB);
      let hslv = rgbToHsl(...rgb);
      if (hslv[2] >= 10) hslv[2] -= 10;
      let hsl = `hsl(${hslv[0]}, ${hslv[1]}%, ${hslv[2]}%)`;
      e.target.style.backgroundColor = hsl;
    }
  });
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

const WHITE = 'hsl(0, 50%, 100%)';
const BLACK = 'hsl(0, 0%, 90%)';
const REGX_RGB = /\d+/g;

const GRID_SIZE = 512;
let elementsCount = 16;

let currentColor = BLACK;

// hsla(270, 50%, 90%) random purple 0-360 random 90% will decrease each hover

// init add a fricking fucntion for this late
makeNewGrid(elementsCount, GRID_SIZE);

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [+(h * 360).toFixed(), +(s * 100).toFixed(), +(l * 100).toFixed()];
}

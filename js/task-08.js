const refs = {
  inputRef: document.querySelector('#controls input'),
  buttonCreate: document.querySelector(
    '#controls button[data-action="render"]',
  ),
  buttonClear: document.querySelector(
    '#controls button[data-action="destroy"]',
  ),
  boxesRef: document.querySelector('#boxes'),
};

refs.buttonCreate.addEventListener('click', appendBoxes);
refs.buttonClear.addEventListener('click', clearBoxes);

function appendBoxes() {
  clearBoxes();
  createBoxes(refs.inputRef.value);
}

function clearBoxes() {
  refs.boxesRef.innerHTML = '';
}

function createBoxes(amount) {
  let divSize = { width: 30, height: 30 };
  const items = [];

  for (let i = 0; i < amount; i += 1) {
    const randomColor = getRandomRgb();
    const divElement = createDivBoxes(
      divSize.width,
      divSize.height,
      randomColor,
    );
    items.push(divElement);
    divSize.width += 10;
    divSize.height += 10;
  }

  refs.boxesRef.append(...items);
}

function createDivBoxes(width, height, color) {
  const createBox = document.createElement('div');
  createBox.style.width = `${width}px`;
  createBox.style.height = `${height}px`;
  createBox.style.backgroundColor = color;

  return createBox;
}

const getRandomRgb = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

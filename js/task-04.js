const refs = {
  valueRef: document.querySelector('#value'),
  decrementRef: document
    .querySelector('[data-action="decrement"]')
    .addEventListener('click', decrement),
  incrementRef: document
    .querySelector('[data-action="increment"]')
    .addEventListener('click', increment),
};

let counterValue = +refs.valueRef.textContent;

function decrement() {
  counterValue -= 1;
  refs.valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  refs.valueRef.textContent = counterValue;
}

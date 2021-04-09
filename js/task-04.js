const refs = {
  valueRef: document.querySelector('#value'),
  decrementRef: document.querySelector('[data-action="decrement"]'),
  incrementRef: document.querySelector('[data-action="increment"]'),
};

let counterValue = +refs.valueRef.textContent;

refs.decrementRef.addEventListener('click', decrement);
refs.incrementRef.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  refs.valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  refs.valueRef.textContent = counterValue;
}

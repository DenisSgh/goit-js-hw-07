const refs = {
  inputRef: document.querySelector('#font-size-control'),
  textRef: document.querySelector('#text'),
};

refs.textRef.style.fontSize = `${refs.inputRef.value}px`;

refs.inputRef.addEventListener(
  'input',
  () => (refs.textRef.style.fontSize = `${refs.inputRef.value}px`),
);

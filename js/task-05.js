const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', inputChange);

function inputChange(event) {
  !event.currentTarget.value
    ? (refs.nameLabel.textContent = 'незнакомец')
    : (refs.nameLabel.textContent = event.currentTarget.value);
}

const refs = {
  input: document
    .querySelector('#name-input')
    .addEventListener('input', inputChange),
  nameLabel: document.querySelector('#name-output'),
};

function inputChange(event) {
  !event.currentTarget.value
    ? (refs.nameLabel.textContent = 'незнакомец')
    : (refs.nameLabel.textContent = event.currentTarget.value);
}

const refs = {
  inputRef: document.querySelector('#validation-input'),
};

refs.inputRef.addEventListener('blur', inputValidation);

function inputValidation(event) {
  const validateLength = refs.inputRef.dataset.length;

  if (event.currentTarget.value.length == validateLength) {
    refs.inputRef.classList.remove('invalid');
    refs.inputRef.classList.add('valid');
  } else {
    refs.inputRef.classList.remove('valid');
    refs.inputRef.classList.add('invalid');
  }
}

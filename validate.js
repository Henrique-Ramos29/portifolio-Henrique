
const nameInput = document.querySelector('#nome');
const counter = document.querySelector('#spam');
const textInput = document.querySelector('#assunto');

  nameInput.addEventListener('input', e => {

    if (nameInput.value.length < 50) {
        counter.innerText = nameInput.value.length;
    } else {
        counter.innerText = 'Max';
        nameInput.value = nameInput.value.substr(0, 50);
    }
}) 








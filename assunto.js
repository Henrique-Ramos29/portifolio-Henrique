
const textInput = document.querySelector('#assunto');
const counter = document.querySelector('#spam');

  nameInput.addEventListener('input', e => {

    if (textInput.value.length < 50) {
        counter.innerText = nameInput.value.length;
    } else {
        counter.innerText = 'Max';
        textInput.value = textInput.value.substr(0, 50);
    }
})
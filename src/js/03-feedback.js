import throttle from 'lodash.throttle';
    
const inputEmail = document.querySelector('input');
const inputText = document.querySelector('.feedback-form textarea')

// inputEmail.addEventListener('input', listenValue());
inputText.addEventListener('input', listenValue)

console.log(inputText)

function listenValue(event) {
    const message = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", message)
}

function formSubmit(event) {
    event.preventDefault()
}
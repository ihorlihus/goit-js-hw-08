import throttle from 'lodash.throttle';
const inputForm = document.querySelector('.feedback-form');
const inputText = document.querySelector('.feedback-form textarea');
const inputEmail = document.querySelector('.feedback-form input')
inputForm.addEventListener('submit', formSubmit);
inputForm.addEventListener('input', throttle(listenInputValue, 500));

const formData = {};
getActualValue();

function listenInputValue (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function getActualValue() {
    const savedValue = localStorage.getItem("feedback-form-state")
    if (savedValue) {
        const email = JSON.parse(savedValue).email;
        const message = JSON.parse(savedValue).message;
        inputEmail.value = email ? JSON.parse(savedValue).email : '';
        inputText.value = message ? JSON.parse(savedValue).message : '';
    };
}

function formSubmit(event) {
    event.preventDefault();
    console.log(`Email: ${inputEmail.value}`);
    console.log(`Message: ${inputText.value}`);
    inputEmail.value = '';
    inputText.value = '';
    localStorage.removeItem("feedback-form-state");
};
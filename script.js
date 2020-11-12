const form = document.getElementById('form');
const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let isPasswordMatch = false;

const validateForm = () => {
    isValid = form.checkValidity();
    
    if(!isValid){
        message.textContent = 'Please fill out all fields';
        message.style.color = "#a11717";
        messageContainer.style.borderColor = '#a11717';
        return;
    }

    if(passwordEl1.value === passwordEl2.value){
        isPasswordMatch = true;
        passwordEl1.style.borderColor = '#2a992a';
        passwordEl2.style.borderColor = '#2a992a';
    } else{
        isPasswordMatch = false;
        message.textContent = 'Make sure Passwords are matching.';
        message.style.color = "#a11717";
        messageContainer.style.borderColor = '#a11717';
        passwordEl1.style.borderColor = '#a11717';
        passwordEl2.style.borderColor = '#a11717';
        return;
    }

    if(isValid && isPasswordMatch){
        message.textContent = `${form.name.value} Successfuly Registered!`;
        message.style.color = "#2a992a";
        messageContainer.style.borderColor = '#2a992a';
        storeFormData();
    }
}

const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
}

const processFormData = (e) => {
    e.preventDefault();
    validateForm();

}


form.addEventListener('submit', processFormData);
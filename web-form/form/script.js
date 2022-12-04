var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus', () => {
    email.style.borderColor = "#06085c";
});

email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc";
});


password.addEventListener('focus', () => {
    password.style.borderColor = "#06085c";
});

password.addEventListener('blur', () => {
    password.style.borderColor = "#ccc";
});
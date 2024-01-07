document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add logic for login here
        alert('Login functionality to be implemented');
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add logic for registration here
        alert('Registration functionality to be implemented');
    });
});

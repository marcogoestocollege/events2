document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const toggleRegistrationLink = document.getElementById('toggleRegistration');

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

    toggleRegistrationLink.addEventListener('click', function (event) {
        event.preventDefault();
        toggleForms();
    });

    function toggleForms() {
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
        registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
        h2.textContent = loginForm.style.display === 'none' ? 'Register' : 'Login';
    }
});

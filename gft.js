// scripts.js

// Handle Login Process
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating login check (username: user, password: pass)
    if (username === 'user' && password === 'pass') {
        // Hide login page and show main page
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';  // Show main page
        document.getElementById('main-page').classList.remove('hidden'); // Ensure visibility
    } else {
        // Show error message
        const errorMessage = document.getElementById('login-error');
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);  // Hide the error message after 3 seconds
    }
});
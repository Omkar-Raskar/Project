document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // If no user has signed up, redirect to the sign-up page
    if (!storedUsername || !storedPassword) {
        alert('No user found. Please sign up first.');
        window.location.href = 'signup.html';  // Redirect to sign-up page
    } else {
        // Check if the entered credentials match the stored credentials
        if (username === storedUsername && password === storedPassword) {
            alert('Login successful!');
            window.location.href = 'index.html';  // Redirect to home page or another page
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    }
});

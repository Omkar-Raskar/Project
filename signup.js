document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store user data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign-up successful! You can now log in.');
    window.location.href = 'login.html';  // Redirect to login page after sign-up
});

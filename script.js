const signupForm = document.getElementById('signupForm')

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
    } else {
        alert('Sign Up successful!');
    }
});

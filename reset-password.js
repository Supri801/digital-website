// reset-password.js

document.querySelector('.reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Validate password and confirmation
    if (newPassword === confirmPassword) {
      alert('Password successfully reset!');
      window.location.href = 'login.html'; // Redirect to login page after resetting password
    } else {
      alert('Passwords do not match. Please try again.');
    }
  });
  
document.getElementById('recover-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
  
    // Check if the email is valid
    if (email === "") {
      alert("Please enter your email address.");
      return;
    }
  
    // For demo purposes, you would send the email to a backend for recovery
    // Here's a simple mock function to simulate that behavior
    alert("A password recovery link has been sent to " + email);
    
    // You can also redirect the user to a different page after recovery (e.g., login page)
    // window.location.href = 'login.html';
  });
  
  document.getElementById('recover-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    
    // Validate the email before sending recovery
    if (email) {
        // Simulate sending recovery email (you can add the real functionality here)
        alert('Recovery email sent to ' + email);

        // Redirect to the home page after the recovery process
        window.location.href = 'home.html';
    } else {
        alert('Please enter a valid email address');
    }
});

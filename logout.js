document.getElementById('confirm-logout').addEventListener('click', function() {
    // Clear session or cookies here
    window.location.href = 'login.html';  // Redirect to login page
  });
  
  document.getElementById('cancel-logout').addEventListener('click', function() {
    window.location.href = 'dashboard.html';  // Stay on dashboard
  });
  
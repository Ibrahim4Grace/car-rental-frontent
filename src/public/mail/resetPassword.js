'use strict';
const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://car-rental-backend-lhm2.onrender.com';
document.addEventListener('DOMContentLoaded', () => {
  const urlPath = window.location.pathname;
  const token = urlPath.split('/').pop();

  if (!token) {
    alert('Token is missing in the URL');
    window.location.href = '/';
    return;
  }

  const resetPasswordForm = document.getElementById('reset-password-form');
  const newPasswordErrorDiv = document.getElementById('newPasswordError');

  resetPasswordForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    try {
      const response = await axios.post(
        `${baseURL}/api/v1/auth/reset-password`,
        {
          token,
          newPassword,
        }
      );
      alert(response.data.message);
      window.location.href = '/auth/login';
    } catch (error) {
      // Display the error message in the div
      newPasswordErrorDiv.textContent = error.response
        ? error.response.data.message
        : error.message;
    }
  });
});

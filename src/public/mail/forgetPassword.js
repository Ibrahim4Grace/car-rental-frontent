'use strict';
const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://car-rental-backend-lhm2.onrender.com';
document.addEventListener('DOMContentLoaded', () => {
  const forgetPasswordForm = document.getElementById('forget-password-form');
  const emailErrorDiv = document.getElementById('emailError');

  forgetPasswordForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    if (!emailInput) {
      console.error('Email input field not found!');
      return;
    }

    const email = emailInput.value;
    try {
      const response = await axios.post(
        `${baseURL}/api/v1/auth/forget-password`,
        { email }
      );
      alert(response.data.message);
      window.location.href = '/auth/login';
      emailErrorDiv.textContent = ''; // Clear any previous errors
    } catch (error) {
      emailErrorDiv.textContent = error.response
        ? error.response.data.message
        : error.message;
    }
  });
});

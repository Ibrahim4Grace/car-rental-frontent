'use strict';

const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'https://car-rental-backend-lhm2.onrender.com';

const frontendURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:8080'
    : 'https://car-rental-frontend.vercel.app';

document
  .getElementById('loginForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = event.target.querySelector('button[type="submit"]');

    submitButton.innerHTML =
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> submitting...';
    submitButton.disabled = true;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(`${baseURL}/api/v1/auth/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      const result = response.data;
      if (result.message) {
        alert(result.message);
        window.location.href = `${frontendURL}/user/index`;
      }
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 422 && error.response.data.errors) {
          const errors = error.response.data.errors;
          errors.forEach((err) => {
            const fieldName = err.path[0];
            const errorMessage = err.message;
            const errorElement = document.getElementById(`${fieldName}Error`);
            if (errorElement) {
              errorElement.innerHTML = errorMessage;
            }
          });
        } else {
          const generalErrorMessage =
            error.response.data.message || 'An unexpected error occurred';
          alert(generalErrorMessage);
        }
      } else {
        alert('An error occurred: ' + error.message);
      }
    } finally {
      submitButton.innerHTML = 'submit';
      submitButton.disabled = false;
    }

    const inputFields = document.querySelectorAll('input');
    inputFields.forEach((inputField) => {
      inputField.addEventListener('input', () => {
        const errorElement = document.getElementById(`${inputField.name}Error`);
        if (errorElement) {
          errorElement.innerText = '';
        }

        const generalErrorElement = document.getElementById('generalError');
        if (generalErrorElement) {
          generalErrorElement.innerText = '';
        }
      });
    });
  });

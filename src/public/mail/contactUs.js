'use strict';

const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'https://car-rental-backend-lhm2.onrender.com';

document
  .getElementById('contactUsForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = event.target.querySelector('button[type="submit"]');

    submitButton.innerHTML =
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';
    submitButton.disabled = true;

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(`${baseURL}/api/v1/contact-us`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = response.data;
      if (result.success) {
        document.getElementById('contactUsForm').reset();
        document.getElementById('contactUsForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        errors.forEach((err) => {
          const fieldName = err.path[0]; // Get the field name from the error
          const errorMessage = err.message; // Get the error message
          document.getElementById(`${fieldName}Error`).innerHTML = errorMessage;
        });
      } else {
        alert('An error occurred: ' + error.message);
      }
    } finally {
      submitButton.innerHTML = 'Submit';
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
